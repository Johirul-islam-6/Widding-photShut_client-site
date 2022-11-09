import React from 'react';
import useTitle from '../../hook/useTitle';

const Block = () => {
    useTitle('Block')
    return (
        <>
            <div className='mt-16 lg:px-20'>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl">Your Question Or Ans: Lisht</h2>
                        <p className="mt-4 mb-8 dark:text-gray-400">So Let's Started</p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl">01.Difference between SQL and NoSQL?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-md">SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests.NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases. </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl">02.What is JWT, and how does it work?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> JSON token is Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  text-2xl">03.What is the difference between javascript and NodeJS?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet.Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-2xl">04.How does NodeJS handle multiple requests at the same time?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4  dark:text-gray-400">The handle 40K requests per second having Node.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Block;