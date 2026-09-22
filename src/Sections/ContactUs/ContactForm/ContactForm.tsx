import React from "react";
import styles from "./contactForm.module.css";
import img from "../../../../public/assets/imgContactUsForm.png";
import Image from "next/image";
import { LuShieldCheck } from "react-icons/lu";
const ContactForm = () => {
  return (
    <div className={styles.ContactForm}>
      <div className={styles.container}>
        <div className={styles.imagesContact}>
          <Image src={img} alt="igm" />

          <div className={styles.overText}>
            <div className={styles.icon}>
              <LuShieldCheck />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>جاهزون لخدممتك</h2>
              <p className={styles.desc}>خبرتنا. هي ضمانك</p>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.heading}>
            <h2>يسعدنا تواصلك معنا</h2>

            <p>
              فريقنا جاهز للإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه،
              <br />
              املأ النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.row}>
              <input type="text" name="fullName" placeholder="الاسم بالكامل" />
              <input type="text" name="phoneNumber" placeholder="رقم الهاتف" />
            </div>
            <div className={styles.vertacal}>
              <input
                type="email"
                name="email"
                placeholder="البريد الألكتروني"
              />
            </div>
            <select name="" id="" disabled>
              <option value="">أختر خدمة</option>
            </select>
            <div className={styles.services}>
              <label>
                <input type="radio" name="serviceType" value="construction" />
                <span>المقاولات</span>
              </label>

              <label>
                <input type="radio" name="serviceType" value="maintenance" />
                <span>صيانة المباني</span>
              </label>

              <label>
                <input type="radio" name="serviceType" value="water" />
                <span>توريد مياه الشرب</span>
              </label>

              <label>
                <input type="radio" name="serviceType" value="other" />
                <span>أخرى</span>
              </label>
            </div>
            {/*  textAree*/}
            <textarea name="" id="" rows={4} placeholder="رسالتك"></textarea>
            <button>أرسال الرسالة</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
