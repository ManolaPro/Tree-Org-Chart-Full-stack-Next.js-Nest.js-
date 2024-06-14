'use client';
export default function Error({
    error,
    reset,
  }: {
    error: Error
    reset: () => void
  }) {

    // useEffect(() => {
    //   // Log the error to an error reporting service
    //   console.error(error);
    // }, [error]);
   
    return (<>
        <h1>Something went wrong</h1>
      {/* <div className={styles.background}>
        <div className={styles.cover}></div>
        <div className={styles.modal}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.button}
            onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
            Try again
          </button>
        </div>
        
      </div> */}
    </>);
  }