export class PicReturn {
  private readonly pictureBox: any;
  private readonly pointsBox: any;
  private oneWidth: number;
  private oneHeight: number;
  private allPicture: Array<any>;
  private readonly allPoint: Array<any>;
  private pointClassName: string;
  private readonly allPictureNormal: Array<any>;
  private time: number;
  private currentIndex: number;
  private threeStyle: any = {
    left: null,
    middle: null,
    right: null
  };
  private mouseData: any = {
    isMouseDown: null,
    downX: null,
    goToNewPage: null,
    currentX: 0,
    currentLeftX: null,
    currentRightX: null,
    upX: null

  };

  constructor(private className: string, private timeOut: number = null, private pointsClass: string = null,
              private pointSelectStyle: string = null) {
    this.pictureBox = document.getElementsByClassName(this.className)[0];
    this.allPicture = [];
    this.allPoint = [];
    this.allPictureNormal = [];
    this.currentIndex = 0;
    if (pointsClass !== null) {
      this.pointsBox = document.getElementsByClassName(this.pointsClass)[0];
    } else {
      this.pointsBox = null;
    }
  }

  getOneWidth() {
    this.oneWidth = this.pictureBox.childNodes[1].childNodes[0].clientWidth;
    this.oneHeight = this.pictureBox.childNodes[1].childNodes[0].clientHeight;
  }

  fixOnesLocation() {
    let i = 0;
    for (const one of this.pictureBox.childNodes) {
      if (one.nodeType === 1) {
        one.setAttribute('style', this.threeStyle.right);
        this.allPicture.push(one);
        this.allPictureNormal.push(one);
        i++;
      }
    }
    this.allPicture[0].setAttribute('style', this.threeStyle.middle);
    this.allPicture[this.allPicture.length - 1].setAttribute('style', this.threeStyle.left);
  }

  getAllPoint() {
    if (this.pointsBox !== null) {
      for (let i = 0; i < this.pointsBox.childNodes.length; i++) {
        if (this.pointsBox.childNodes[i].nodeType === 1) {
          this.allPoint.push(this.pointsBox.childNodes[i]);
        }
      }
    }
  }

  loopPoint() {
    if (this.pointsBox !== null) {
      this.pointClassName = this.pointsBox.childNodes[0].className;
      for (let i = 0; i < this.allPicture.length - 1; i++) {
        this.pointsBox.appendChild(this.pointsBox.childNodes[0]);
        const onePoint: any = document.createElement('div');
        // onePoint.classList.add(this.pointClassName);
        onePoint.setAttribute('class', this.pointClassName);  // ie9
        onePoint.setAttribute('_ngcontent-c5', '');  // ie9
        this.pointsBox.appendChild(onePoint);
      }
    }
  }

  changePointColor(pointArr, currentIndex) {
    for (const one of pointArr) {
      // one.classList.remove(this.pointSelectStyle);
      one.setAttribute('class', this.pointClassName);  // ie9
    }
    // pointArr[currentIndex].classList.add(this.pointSelectStyle);
    pointArr[currentIndex].setAttribute('class', `${this.pointClassName} ${this.pointSelectStyle}`); // ie9
  }

  pointGuideCommonMethod(i) {
    clearInterval(this.time);
    this.currentIndex = i - 1;
    const sliceElseFirst: Array<any> = this.allPictureNormal.slice(0, i);
    const sliceElseSecond: Array<any> = this.allPictureNormal.slice(i);
    this.allPicture = sliceElseSecond.concat(sliceElseFirst);
    const one: any = this.allPicture.pop();
    this.allPicture.unshift(one);
    for (let s = 0; s < this.allPicture.length; s++) {
      if (s > i) {
        this.allPictureNormal[s].setAttribute('style', this.threeStyle.right);
      } else if (s < i) {
        this.allPictureNormal[s].setAttribute('style', this.threeStyle.left);
      }
    }
    this.run();
  }

  pointGuide() {
    for (let i = 0; i < this.allPoint.length; i++) {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        this.allPoint[i].addEventListener('touchstart', () => {
          this.pointGuideCommonMethod(i);
        });
        this.allPoint[i].addEventListener('touchend', () => {
          this.interval();
        });
      } else {
        this.allPoint[i].addEventListener('mouseover', () => {
          this.pointGuideCommonMethod(i);
        });
        this.allPoint[i].addEventListener('mouseout', () => {
          this.interval();
        });
      }
    }
  }

  down(event, time, touch: boolean = false) {
    this.mouseData.currentLeftX = -this.oneWidth;
    this.mouseData.currentRightX = this.oneWidth;
    if (!touch) {
      this.mouseData.isMouseDown = true;
      this.mouseData.downX = event.clientX;
    } else {
      this.mouseData.downX = event.changedTouches[0].clientX;
    }
    clearInterval(time);
    this.mouseData.goToNewPage = true;
  }

  mouseUp(goToNewPage, upX, downX, touch: boolean = false) {
    const URL: string = this.allPicture[0].getAttribute('location');
    if (goToNewPage && !touch && URL !== null) {
      window.open(URL);
    }
    if (upX - downX >= 5) {
      this.back();
    } else if (upX - downX <= -5) {
      this.run();
    }
    this.interval();
  }

  move(event, allPicture, touch: boolean = false) {
    let howLong = 0;
    if (!touch) {
      howLong = event.clientX - this.mouseData.downX;
    } else {
      howLong = event.changedTouches[0].clientX - this.mouseData.downX;
    }
    allPicture[0].style.left = `${this.mouseData.currentX + howLong}px`;
    allPicture[0].style.transition = `none`;
    allPicture[allPicture.length - 1].style.left = `${this.mouseData.currentLeftX + howLong}px`;
    allPicture[allPicture.length - 1].style.transition = `none`;
    allPicture[1].style.left = `${this.mouseData.currentRightX + howLong}px`;
    allPicture[1].style.transition = `none`;
    this.mouseData.goToNewPage = false;
  }

  mouseDirection() {
    this.pictureBox.onmousedown = (event) => {
      event.preventDefault();
      if (event.buttons === 1) {
        this.down(event, this.time);
      }
    };
    this.pictureBox.onmousemove = (event) => {
      if (this.mouseData.isMouseDown && event.buttons === 1) {
        this.move(event, this.allPicture);
      }
    };
    this.pictureBox.onmouseup = (event) => {
      if (event.button === 0) {
        this.mouseData.isMouseDown = false;
        this.mouseData.upX = event.clientX;
        this.mouseUp(this.mouseData.goToNewPage, this.mouseData.upX, this.mouseData.downX);
      }
    };

    this.pictureBox.ontouchstart = (event) => {
      event.preventDefault();
      this.down(event, this.time, true);
    };
    this.pictureBox.ontouchmove = (event) => {
      this.move(event, this.allPicture, true);
    };
    this.pictureBox.ontouchend = (event) => {
      this.mouseData.upX = event.changedTouches[0].clientX;
      this.mouseUp(this.mouseData.goToNewPage, this.mouseData.upX, this.mouseData.downX, true);
    };
  }

  run() {
    this.allPicture[0].setAttribute('style', this.threeStyle.left);
    this.allPicture[1].setAttribute('style', this.threeStyle.middle);
    this.allPicture[2].setAttribute('style', this.threeStyle.right);
    const one: any = this.allPicture.shift();
    this.allPicture.push(one);
    this.currentIndex++;
    if (this.currentIndex >= this.allPicture.length) {
      this.currentIndex = 0;
    }
    if (this.pointsBox !== null) {
      this.changePointColor(this.allPoint, this.currentIndex);
    }
  }

  back() {
    this.allPicture[0].setAttribute('style', this.threeStyle.right);
    this.allPicture[this.allPicture.length - 1].setAttribute('style', this.threeStyle.middle);
    this.allPicture[this.allPicture.length - 2].setAttribute('style', this.threeStyle.left);
    const one: any = this.allPicture.pop();
    this.allPicture.unshift(one);
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.allPicture.length - 1;
    }
    if (this.pointsBox !== null) {
      this.changePointColor(this.allPoint, this.currentIndex);
    }
  }

  setThreeStyle() {
    this.threeStyle.left = `position: absolute;left: -${this.oneWidth}px;top: 0;z-index: -1;`;
    this.threeStyle.middle = `position: absolute;left: 0;top: 0;z-index: 1;`;
    this.threeStyle.right = `position: absolute;left: ${this.oneWidth}px;top: 0;z-index: -1;`;
  }

  interval() {
    this.time = setInterval(() => {
      this.run();
    }, this.timeOut);
  }

  widthChangeFixHeight() {
    this.pictureBox.style.height = this.oneHeight + 'px';
    window.onresize = () => {
      this.getOneWidth();
      this.setThreeStyle();
      this.pictureBox.style.height = this.oneHeight + 'px';
    };
  }

  start() {
    this.getOneWidth();
    this.setThreeStyle();
    this.fixOnesLocation();
    this.loopPoint();
    this.getAllPoint();
    if (this.pointsBox !== null) {
      this.changePointColor(this.allPoint, this.currentIndex);
    }
    this.pointGuide();
    this.widthChangeFixHeight();
    setTimeout(() => {
      this.getOneWidth();
      this.pictureBox.style.height = this.oneHeight + 'px';
    }, 10);
    this.mouseDirection();
    this.interval();
  }
}

// let pictureReturn = new PicReturn('picBox', 2000, 'points', 'pointSelected');
// pictureReturn.start();
