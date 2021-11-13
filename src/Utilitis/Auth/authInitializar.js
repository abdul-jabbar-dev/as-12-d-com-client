import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCX42fpmRFta_ckAZ1JlZnwMhjQKyrhsbs",
    authDomain: "d-com-aj.firebaseapp.com",
    projectId: "d-com-aj",
    storageBucket: "d-com-aj.appspot.com",
    messagingSenderId: "356633950731",
    appId: "1:356633950731:web:6f92986b4b080c1488a50e"
};

const firebaseInit = () => initializeApp(firebaseConfig);
export default firebaseInit

