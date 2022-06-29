<template>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>01</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>02</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>X</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>03</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>04</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>2</h2>
                </div>
                <div class="subject">
                    <h1>GIN</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>05</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>3</h2>
                </div>
                <div class="subject">
                    <h1>PRE</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>06</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>07</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>PRE</h1>
                    <h2>2</h2>
                </div>
                <div class="subject">
                    <h1>OBS</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>08</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>PRE</h1>
                    <h2>2</h2>
                </div>
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>4</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>09</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>5</h2>
                </div>
                <div class="subject">
                    <h1>PED</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>10</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>PED</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>REU</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-active">
            <div class="week-title">
                <p>Semana</p>
                <h1>11</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>REU</h1>
                    <h2>2</h2>
                </div>
                <div class="subject">
                    <h1>OBS</h1>
                    <h2>2</h2>
                </div>
            </div>
        </div>
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>12</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="line">
        <div class="card-inactive">
            <div class="week-title">
                <p>Semana</p>
                <h1>13</h1>
                <button class="flipbtn" type="button" @click="flipCard = !flipCard">
                    <i v-if="!flipCard">+</i>
                        <i v-if="flipCard">-</i>
                </button>
            </div>
            <div class="progress">
                <div class="subject">
                    <h1>NEF</h1>
                    <h2>1</h2>
                </div>
                <div class="subject">
                    <h1>CIR</h1>
                    <h2>1</h2>
                </div>
            </div>
        </div>
        <div class="scene">
            <div class="card-inactive">
                <div v-bind:class="{ flipme: cardOne == 'flipped' }" class="card">
                    <div class="card__face card__face--front">
                        <div class="week-title">
                            <p>Semana</p>
                            <h1>14</h1>
                        </div>
                        <div class="progress">
                            <div class="subject">
                                <h1>NEF</h1>
                                <h2>1</h2>
                            </div>
                            <div class="subject">
                                <h1>CIR</h1>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                    <div class="card__face card__face--back">
                        <div class="week-title">
                            <p>16/08</p>
                            <p>24/08</p>
                        </div>
                        <div class="progress">
                            <div class="subject">
                                <h1>NEF</h1>
                                <h2>1</h2>
                            </div>
                            <div class="subject">
                                <h1>CIR</h1>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button type="button"
                 @click="cardOne == 'start' ? (cardOne = 'flipped' ) : (cardOne = 'start' )">
                    <i v-if="cardOne">+</i>
                        <i v-if="!cardOne">-</i>
                </button> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MedCard',
    data() {
    return {
      cardOne: "start"
    };
  }
};
</script>
<style scoped>
 .line {
    display: flex;
    justify-content: space-between;
    margin: 10px;
 }

 .scene {
  width: 385px;
  height: 160px;
  margin: 40px 0;
  perspective: 600px;  
 }

 .card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
 }

 .card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #060f0e;
  display: flex;
 }

.card__face--back {
  transform: rotateX(180deg);
  background-color: #060f0e;
  display: flex;
 }

/* this style is applied when the card is clicked */
.flipme {
  transform: rotateX(180deg);
 }
 .card-inactive {
    background-color: #060f0e;
    display: flex;
    border-radius: 10px 77px 77px 10px;
    margin: 10px;
    
 }
 .card-active {
    background-color: #005b49;
    border-radius: 10px 77px 77px 10px;
    display: flex;
    margin: 10px;
 }
 .card-active > .progress >.subject {
    border: 7px solid #001412;
 }
 .week-title {
    padding: 0 0 15px 10px;
 }
 button {
    border-radius: 100%;
    border: 3px solid #11cdaf;
    font-size: 19px;
    color: #11cdaf;
    background: none;
    cursor: pointer;
    height: 30px;
    
 }
 .progress {
    display: flex;
 }
 .subject {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    border: 7px solid #222e2e;
    text-align: center;
    padding: 10px;
    margin: 10px 3px 0 15px; 
 } 
</style>