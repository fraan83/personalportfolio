import React from 'react'

const Footer = () => {
    const dataodierna = new Date();
    const annocorrente = dataodierna.getFullYear()

    return (
        <div>
            <footer className="footer mt-auto py-3 bg-light text-dark">
                <p className="text-center">
                    Francesco Greco | © 2016 -  {annocorrente}
                </p>

            </footer>
        </div>
    )
}

export default Footer
