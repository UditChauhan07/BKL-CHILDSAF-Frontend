import React from "react";
import Layout from "../../layout";
import styles from "../detailpage/styles.module.css";

const detail = () => {
  const Detailpage = () => {
    return (
      <div className="DetailPage">


<div className={` ${styles.deatilDiv}`}>
                <div className={styles.profileDiv}>
                    <div>
                        <img src='images/profile.png' alt=''/>
                    </div>
                    <div className={styles.profileName}>
                        <h1>Child Name</h1>
                        <h2>Arthur Labinjo-Hughes</h2>
                    </div>

                </div>
                <div className={styles.Inatraction}>
                    <div className={styles.generatedDiv}>
                        <h1>Generated by:</h1>
                        <h2>Social Worker 3</h2>
                    </div>
                    <hr/>
                    <div className={styles.Inatraction2}>
                    <h1>Interaction</h1>
                    <h2>180</h2>
                    </div>
                </div>
                <div className={styles.PostCodeDive}>
                    <div className={styles.post}>
                        <h1>Post code:</h1>
                        <h2>BD7</h2>
                    </div>
                    <hr/>
                    <div className={styles.status}>
                        <h1>Status</h1>
                        <h2>Red</h2>

                    </div>
                    

                </div>
            </div>

        
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
            <h1 className={styles.QuickSummary}>Case Quick Summary</h1>
            <p>
              Arthur Labinjo-Hughes was a little boy who loved playing cricket
              and football, enjoyed school, had lots of friends, and was always
              laughing. He died in Solihull aged six on 17th June 2020.
            </p>
            <p>
              His father’s partner, Emma Tustin, was convicted of his murder,
              and his father, Thomas Hughes, was convicted of manslaughter. They
              are both serving prison terms.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div
            className={`col-xl-4 col-lg-4 col-md-4 col-12 ${styles.DetailImg}`}
          >
            <img className="img-fluid" src="images/detail-img.png" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Layout>
        <Detailpage />
      </Layout>
    </div>
  );
};

export default detail;
