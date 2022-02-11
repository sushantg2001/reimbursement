# OSA IIITD

# FRONTEND:
To run frontend:
1. ```cd reimbursement-frontend```
2. ```npm install```
3. ```npm start```


# BACKEND
## Technologies

Reimbursement Portal IIITD is powered by a number of technologies:

- [Django] - high-level Python Web framework
- [PostgreSQL] - a powerful, open source object-relational database system
- [DjangoRestFramework] - a powerful and flexible toolkit to but RESTful APIs.
## Setup

1. To clone and run, you'll need Git, [Python] v3.0+ and [PostgreSQL] v9+ installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/midas-research/reimbursement-iiitd.git

# Go into the repository
$ cd reimbursement-iiitd/reimbursement-backend/

# Install dependencies in a virtualenv
$ pip install -r requirements.txt
```

2. For environment variables check out .env.examples in config/local folder and create .env file for your own variables

```bash
# Create .env file
$ vim .env
```

The databse variables are from [PostgreSQL] database setup.


3. You are good to go just start the server after making migrations.

```bash
# Make migrations
$ python manage.py makemigrations

# Migrate the changes
$ python manage.py migrate

# Start the server
$ python manage.py runserver
```

Server by default starts in development mode at http://127.0.0.1:8000/

## Development

Great setting it all up! Let's contribute now. You'll need to learn Django basics to work on the app.

1. Make sure to start from the master branch and update your local repositories.

```bash
# Start from master
$ git checkout master

# Stay updated
$ git pull
```

2. Create a new branch for each bug fix or issue. Rest is basic.

```bash
# Create new branch keep qoutes
$ git checkout -b "YOUR_NEW_BRANCH"
```

## Deployment

Once the code is on the server we can nginx with gunicorn to host the app. Refer [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04) for more information.

For production use the settings.py in the prod folder it has been preconfigured as per the above article so you only need to setup the nginx and gunicorn.

## License

MIT