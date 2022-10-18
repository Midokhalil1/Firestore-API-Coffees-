import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import ServiceAccount  from "../secrets.js";

export default function dbConnect() {
    if(!getApps().length) {
        initializeApp({
            credential: cert (ServiceAccount)
        })
    }
    return getFirestore()
}

