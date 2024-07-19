import styles from "./page.module.css";

import FlexColumn from "../components/examples/display/flexColumn/";
import FlexRow from "../components/examples/display/flexRow/";

export default function Examples() {
  return (
    <>
      <div className={styles.example}>
        <h1 className={styles.title}>Examples page</h1>
        <div className={styles.div}>
          <div className={styles.side}>
            <div className={styles.content}>
            </div>
          </div>
          <div className={styles.div}>
            <div>
              <p>Flex Column:</p>
              <FlexColumn />
            </div>
            <div>
              <p>Flex row:</p>
              <FlexRow />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
