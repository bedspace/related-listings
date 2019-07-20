import React from 'react';
import styles from '../app.css';

const ModalFooter = ({ modalFooterClicked, overflow, height }) => (
  <div>
    <div onClick={modalFooterClicked} className={styles.modalFooter} style={{ overflow, height }}>
      <div className={styles.modalInnerFooter}>
        <div className={styles.smallImgContainer}>
          <img className={styles.smallImg} src="https://fec-hrsf119.s3-us-west-1.amazonaws.com/im1.jpg" alt="Room" />
        </div>
        <div className={styles.modalFooterInfo}>
          <span><p className={styles.modalRoomname}>ENTIRE VILLA - Atami-Shi</p></span>
          <span><p className={styles.modalRoomLocation}>Y's Village Fukuori</p></span>
          <div className={styles.reviewsContainerModal}>
            <div className={styles.starContainerModal}>
              <svg className={styles.starImg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="#008489"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
              <svg className={styles.starImg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="#008489"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
              <svg className={styles.starImg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="#008489"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
              <svg className={styles.starImg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="#008489"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
              <svg className={styles.starImg} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" fill="#D8D8D8"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modalAboutSection}>
        <hr className={styles.horizontalRule} />
        <div className={`${styles.modalAboutListing} ${styles.modalReviewsContainers}`}>
          <h2 className={styles.modalReviewsTitles}>About this listing</h2>
          <p className={styles.modalReviewsPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus ultrices, malesuada diam vel, tempus leo. Nunc ligula massa, rhoncus eu odio sed, blandit rhoncus lectus. Aenean egestas justo sapien, eget aliquam ante auctor vel. In ac mi at augue consequat tempus. Aliquam eget nibh varius, convallis magna in, auctor leo. Maecenas varius, nisi ac pharetra finibus, velit nibh suscipit mauris, sit amet dictum dui nunc a enim. Suspendisse sit amet sapien semper, pulvinar dolor quis, tincidunt sapien. Vivamus vulputate feugiat eros quis hendrerit. Sed tempor est a massa euismod rhoncus. Nullam vitae ornare enim. Cras finibus dapibus ligula vel elementum. Vestibulum tincidunt ac felis eget elementum. Phasellus nec nunc condimentum, faucibus est quis, placerat nulla. Proin magna erat, facilisis id lacinia in, scelerisque non quam. Nam sed volutpat arcu. Fusce viverra posuere porta.</p>
        </div>
        <hr className={styles.horizontalRule} />
        <div className={`${styles.modalAboutSpace} ${styles.modalReviewsContainers}`}>
          <h2 className={styles.modalReviewsTitles}>About space</h2>
          <p className={styles.modalReviewsPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus ultrices, malesuada diam vel, tempus leo. Nunc ligula massa, rhoncus eu odio sed, blandit rhoncus lectus. Aenean egestas justo sapien, eget aliquam ante auctor vel. In ac mi at augue consequat tempus. Aliquam eget nibh varius, convallis magna in, auctor leo. Maecenas varius, nisi ac pharetra finibus, velit nibh suscipit mauris, sit amet dictum dui nunc a enim. Suspendisse sit amet sapien semper, pulvinar dolor quis, tincidunt sapien. Vivamus vulputate feugiat eros quis hendrerit. Sed tempor est a massa euismod rhoncus. Nullam vitae ornare enim. Cras finibus dapibus ligula vel elementum. Vestibulum tincidunt ac felis eget elementum. Phasellus nec nunc condimentum.</p>
        </div>
        <hr className={styles.horizontalRule} />
        <div className={`${styles.modalAboutNeighborhoods} ${styles.modalReviewsContainers}`}>
          <h2 className={styles.modalReviewsTitles}>Neighborhood</h2>
          <p className={styles.modalReviewsPara}>Duis quam enim, pulvinar et est quis, ultricies luctus leo. Duis eget ex laoreet, dictum enim at, vestibulum lectus. Nulla quis urna magna. In luctus purus augue. Etiam orci massa, mollis sit amet libero sed, pulvinar varius nibh. Nulla tincidunt tempor leo, et dignissim augue ultrices ut. Aenean tincidunt feugiat felis quis mollis. Mauris eget sem eget augue accumsan blandit. Duis eu enim dolor. Sed sem urna, pellentesque non sodales id, viverra eu felis. Praesent commodo ligula justo.</p>
        </div>
        <hr className={styles.horizontalRule} />
        <div className={styles.modalReviewsContainers}>
          <h2 className={styles.modalReviewsTitles}>Reviews</h2>
          <p className={styles.modalReviewsPara}>Sed ultrices, nulla id aliquam accumsan, nibh velit tempor mauris, at iaculis tellus nisi nec massa. Nunc varius commodo ligula, in semper augue dignissim nec. Vivamus cursus euismod luctus. Nam tristique fermentum lobortis. Mauris mi massa, feugiat at ipsum quis, viverra tempus lacus. Proin laoreet massa vitae maximus dapibus. Pellentesque vulputate augue in sodales euismod. Maecenas eu pretium neque. Sed dapibus massa a mi lacinia, sit amet scelerisque nisi euismod. Pellentesque imperdiet dolor nisl, in pretium felis ultrices nec. Pellentesque auctor elementum odio, at lacinia quam pellentesque eget.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ModalFooter;
