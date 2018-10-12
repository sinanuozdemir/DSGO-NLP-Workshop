
# import sci-kit learn's serialization modulefrom
from sklearn.externals import joblib
# sentence tokenization from NLTK
from nltk import sent_tokenize
# Basic Flask imports
from flask import Flask, jsonify, request

# initialize the Flask object
app = Flask(__name__)

@app.route('/', methods=['POST'])
def word2vec():
    # load the pre-trained model (see notebook)
    loaded_lsa = joblib.load('model/lsa.joblib')
    # tokenize the text into sentences because that is how we learned it
    sentences = sent_tokenize(request.form["text"])
    # predict the topic identifiers using the LSA we built
    topics = map(int, loaded_lsa.predict(sentences))
    # return the results as a JSON
    return jsonify({"topics": topics, "sentences": sentences})

if __name__ == '__main__':
    app.run(debug=True)
