import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const screams = admin.firestore().collection("screams");

export const getScreams = functions.https.onRequest((req, res) => {
    screams
        .get()
        .then((d) => {
            const screams = [] as any;
            d.forEach((d) => screams.push(d.data()));
            return res.json(screams);
        })
        .catch((err) => console.error(err));
});
