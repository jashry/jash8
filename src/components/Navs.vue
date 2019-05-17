<template>
<div class="navWrp">
    <div class="navs" :class="{hideNav:switchs}">
        <a href="javascript:;" class="navBtn" :class="{hideIcon:!switchs}"  @click="opnNav"></a>
        <div style="height:100%" @click="clsNav">        
          <div class="infosWrp">
              <Headers :imgsrc='headPic' :person_name='"X Man"'></Headers>
          </div>
          <div class="links">   
              <router-link to="/home"><img :src="homeIcon"/> <strong> Home </strong></router-link>
              <router-link to="/article"><img :src="articleIcon"/><strong> Article </strong></router-link>
              <router-link to="/about"><img :src="aboutIcon"/><strong> About </strong></router-link>
              <router-link to="/me"><img :src="meIcon"/><strong> Me </strong></router-link>
          </div>
          <p class="supports">Jash technical support</p>
        </div>
    </div>
</div>
</template>

<script>
import homeIcon from "../assets/home.png";
import articleIcon from "../assets/article.png";
import aboutIcon from "../assets/about.png";
import meIcon from "../assets/me.png";
import headPic from "../assets/cat.gif";
import navPic from "../assets/navs.png";
import Headers from "../components/Header";

export default {
  data() {
    return {
      switchs:true,
      homeIcon: homeIcon,
      articleIcon: articleIcon,
      aboutIcon: aboutIcon,
      meIcon: meIcon,
      headPic: headPic,
      navPic:navPic
    };
  },
  components: {
    Headers
  },
  methods:{
      clsNav(){
        this.switchs=true
      },
      opnNav(){
        this.switchs=false
      }
  }
};
</script>

<style scoped>
.navBtn{
  display: block;
  height: 33px;
  width: 33px;
  position: fixed;
  top: 6px;
  left: -43px;
  background-size: 96% auto;
  background-position: 50% 50%;
  background-repeat: no-repeat;
   transition:all 600ms cubic-bezier(0.23, 1, 0.320, 1);
  background-image:url(../assets/navs.png)
}

.navs {
  position: fixed;
  background-color: #fdfdfd;
  z-index: 999;
  height: 100%;
  width: 77%;
  max-width: 286px;
  top: 0;
  right: 0;
  box-shadow: 0 0 3px gainsboro;
  transition:all 700ms cubic-bezier(0.23, 1, 0.320, 1)
}
.hideIcon{
  opacity: 0;
}
.hideNav{
    transform: translateX(100%);
}
.links {
  padding-top: 1rem;
}
.navs a {
  display: block;
  line-height: 3rem;
  text-align: center;
  text-transform: capitalize;
  color: #666;
}
.navs a img {
  width: 1.2rem;
  vertical-align: middle;
}
.navs a strong {
  text-align: center;
  display: inline-block;
  width: 6rem;
}
.infosWrp {
  width: 100%;
  padding: 0;
  background-color: #fbf7e1;
}
.supports {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-transform: capitalize;
  font-size: 0.7rem;
  color: #ccc;
}
</style>