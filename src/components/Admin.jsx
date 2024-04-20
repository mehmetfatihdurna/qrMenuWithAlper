import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import styles from "../assets/styles/Admin.module.css"
import 'react-toastify/dist/ReactToastify.css';


function Admin() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  let adminUserName = process.env.REACT_APP_USERNAME;
  let adminPassword = process.env.REACT_APP_PASSWORD;

  function handlePassword(event) {
    setPassword(event.target.value);
  };

  function handleUserName(event) {
    setUsername(event.target.value);
  };

  function loginControl() {
    if (adminPassword === password && adminUserName === username) {
      console.log("Giriş Başarılı");
      navigate("/admin/duzenleme/sayfasi/q/q/q/t", { state: { isAdmin: 'true' } });
    } else {
      console.log("Giriş Başarısız");
      toast.error("HATA: Giriş Bilgilerini Kontrol Ediniz!");
    }
  }

  return (
    <div>

      

      <section className={styles.overlay}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
         
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin Paneline Giriş Yapın
              </h1>
              
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kullanıcı Adınız</label>
                  <input type="text" onChange={handleUserName} name="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifre</label>
                  <input type="password" onChange={handlePassword} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                
                <button onClick={loginControl} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Giriş Yap</button>
                
              
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />


    </div>
  )
}

export default Admin;