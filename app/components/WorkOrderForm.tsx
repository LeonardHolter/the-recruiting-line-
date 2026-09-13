"use client";

import styles from "../page.module.css";

const EMAIL = "contact@therecruitingline.com";

export default function WorkOrderForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      "Name: " + f.get("name"),
      "Company: " + f.get("company"),
      "Metro: " + f.get("metro"),
      "Role to fill: " + f.get("role"),
      "Phone: " + f.get("phone"),
    ].join("\n");
    const subject = "Work order: " + f.get("role") + " in " + f.get("metro");
    window.location.href =
      `mailto:${EMAIL}?subject=` + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formHead}>
        <span>Work order: new seat</span>
        <span>15-minute brief follows</span>
      </div>
      <input className={styles.input} name="name" placeholder="Your name" aria-label="Your name" autoComplete="name" required />
      <input className={styles.input} name="company" placeholder="Company" aria-label="Company" autoComplete="organization" required />
      <div className={styles.inputPair}>
        <input className={styles.input} name="metro" placeholder="Metro" aria-label="Metro" required />
        <input className={styles.input} name="role" placeholder="Role to fill" aria-label="Role to fill" required />
      </div>
      <input className={styles.input} name="phone" type="tel" placeholder="Best number to reach you" aria-label="Best number to reach you" autoComplete="tel" required />
      <button type="submit" className={styles.submit}>Open the work order</button>
      <div className={styles.formNote}>No retainer. No invoice until day 30.</div>
    </form>
  );
}
