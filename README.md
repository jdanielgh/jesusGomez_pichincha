## Requirements

* Node 16.16.0
* Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/jdanielgh/jesusGomez_pichincha
cd jesusGomez_pichincha

```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start
```
Open [http://localhost:3000](http://localhost:3000) and take a look around.
```
Open `variables.env` and inject your credentials so it looks like this
PORT=3000
DATABASE_URL=<<database-cnx>>
NODE_ENV=development
