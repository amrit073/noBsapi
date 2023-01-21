
# noBsapi

noBsapi is a cloudlflare worker based api designed to deliver common day to day data we google for.




## API Reference

#### Get nepali date

```http
  GET <workeruri>/date
```



## Usage/Examples

```shell
curl apiworker.chaoticone.workers.dev/date
2079 Magh 7, Saturday
```


## Run Locally
To run this project Locally, you'll need to first install [wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update)

```
  npm install -g wrangler
```

Clone the project

```bash
  git clone https://github.com/amrit073/noBsapi
```

Go to the project directory

```bash
  cd noBsapi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  wrangler dev src/index.ts
```


## Deployment

To deploy this project in your own worker, you will need to first login through wrangler.

```bash
  wrangler login
  git clone https://github.com/amrit073/noBsapi
  cd noBsapi/
  wrangler publish

```

## Contributing

Contributions are always welcome!
