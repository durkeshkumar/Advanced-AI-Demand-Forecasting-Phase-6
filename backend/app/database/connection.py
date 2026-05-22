from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# change password below
DATABASE_URL = (
    "mysql+pymysql://root:Spriya%401995@localhost/demand_forecasting"
)

engine = create_engine(

    DATABASE_URL

)

SessionLocal = sessionmaker(

    autocommit=False,
    autoflush=False,
    bind=engine

)

Base = declarative_base()


# IMPORTANT
# database dependency for APIs

def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()