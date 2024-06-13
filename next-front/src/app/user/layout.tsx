import styles from './page.module.css'

export default function UserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className={styles.overlay}>
        <div className={styles.modal}>
        {children}
        </div>
    </div>
    );
  }