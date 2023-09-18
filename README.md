COVID-19 Frontend

COVID-19 Frontend
=================

Welcome to the COVID-19 Frontend, a React.js application generated with Vite. This frontend is designed to work with the COVID-19 API backend. Please make sure you have the backend up and running before installing and using this frontend.

Backend Setup
-------------

Before proceeding with the frontend setup, ensure you have already set up and started the COVID-19 API backend. Refer to the backend's [README](https://github.com/martin-nazaryan/covid-19-api/blob/main/README.md) for instructions on how to do this.

Installation
------------

1.  Clone this repository (if you haven't already):

        git clone https://github.com/martin-nazaryan/covid-19-client.git

2.  Navigate to the project directory:

        cd covid-19-client

3.  Create a copy of the environment variables template:

        cp env.example .env.local

4.  Open the `.env.local` file and define the required environment variables as specified in the template.

Running the Frontend
--------------------

To start the frontend, run the following commands:

    # Install dependencies
    yarn
    
    # Start the development server
    yarn run dev
