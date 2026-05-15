import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar
    from "../components/layout/Sidebar";

import {
    uploadDataset
}
    from "../services/datasetService";

import {
    addNotification
}
    from "../services/notificationService";


export default function Upload() {

    const navigate = useNavigate();

    const [file, setFile] =
        useState(null);

    const [message, setMessage] =
        useState("");

    const [loading, setLoading] =
        useState(false);



    async function handleUpload() {

        if (!file) {

            setMessage(
                "Please select a file"
            );

            return;

        }


        setLoading(true);


        const response =

            await uploadDataset(
                file
            );


        if (response) {

            addNotification(
                "Dataset uploaded successfully"
            );

            setMessage(
                response.message
            );


            setTimeout(() => {

                navigate(
                    "/dashboard"
                );

            }, 1500)

        }


        setLoading(false)

    }



    return (

        <div className="
flex
min-h-screen
bg-gradient-to-br
from-purple-100
via-white
to-purple-200
">

            <Sidebar />


            <div className="
flex-1
p-8
">

                <h1 className="
text-4xl
font-bold
">

                    Dataset Upload

                </h1>

                <p className="
text-gray-500
mt-2
">

                    Upload CSV or Excel dataset

                </p>



                <div className="
bg-white
rounded-3xl
shadow-xl
p-10
mt-10
max-w-xl
">

                    <input

                        type="file"

                        onChange={(e) =>

                            setFile(
                                e.target.files[0]
                            )

                        }

                        className="
w-full
border
p-4
rounded-xl
mb-6
"

                    />


                    <button

                        onClick={
                            handleUpload
                        }

                        disabled={loading}

                        className="
w-full
bg-purple-700
text-white
p-4
rounded-xl
hover:bg-purple-800
"

                    >

                        {

                            loading

                                ?

                                "Uploading..."

                                :

                                "Upload Dataset"

                        }

                    </button>



                    {

                        message &&

                        <div className="
mt-6
bg-green-100
text-green-700
rounded-xl
p-4
">

                            {message}

                        </div>

                    }

                </div>

            </div>

        </div>

    )

}