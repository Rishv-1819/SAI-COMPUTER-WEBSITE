
export const printOffer = (elementId = "offer-letter") => {

    const content = document.getElementById(elementId);

    if (!content) {

        alert("Offer Letter not found.");

        return;

    }

    const printWindow = window.open("", "", "width=900,height=700");

    printWindow.document.write(`
        <html>
            <head>
                <title>Offer Letter</title>

                <style>

                    body{

                        font-family: Arial, sans-serif;

                        padding:40px;

                        line-height:1.8;

                        color:#333;

                    }

                    h1{

                        text-align:center;

                        margin-bottom:30px;

                    }

                    hr{

                        margin-bottom:30px;

                    }

                    p{

                        font-size:16px;

                    }

                </style>

            </head>

            <body>

                ${content.innerHTML}

            </body>

        </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

    printWindow.close();

};