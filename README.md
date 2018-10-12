# DSGO-NLP-Workshop


1. Use Workshop.ipynb to see how to make an ML model capable of clustering and prediction
2. See `server.py` to see a simple implementation of a Flask server running our model as a REST API
3. Use [ngrok](https://ngrok.com) to create a web tunnel, making our local server accessible via HTTPS
4. See `manifest.json`, `content.js`, `icons` to see the makeup of our Chrome Extension

##Creating the model
1. See the [notebook](Workshop.ipynb)


## Setting up Flask
1. Create a virtualenv by running `virtualenv env`
2. Activate the virtualenv, `source env/bin/activate`
3. Run `pip install requirements` to get the correct modules
4. run `server.py`
5. Download [ngrok](https://ngrok.com) and run `ngrok http 5000`
6. Copy and paste the https secured URL and replace it in `content.js`

##Setting up the Chrome Extension
1. go to `chrome://extensions`
2. Enable `Developer Mode`
3. Click on `Load Unpacked`
4. Navigate and highlight this repo
5. Hit OK
6. You should see two dots appear in the top right corner