<template>
<div>
    <div class="headWrp">
        <div class="innerWrp">
            <img :src="imgsrc" alt="">
        </div>        
    </div>
    <p>{{person_name}}</p>
 </div>
</template>

<script>
export default {
  props: ["imgsrc",'person_name']
};
</script>

<style scoped>
.headWrp {
  padding-top: 0.6rem;
  width: 100%;
  font-size: 0;
}
.innerWrp {
  width: 66%;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #f0f8ff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #dcdcdc;
}
.headWrp img {
  width: 100%;
}

 p {
  margin: 0;
  padding: 1rem;
  text-shadow: 1px 1px 2px #ccc
}
</style>