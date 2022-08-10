<template>
  <div class="card p-3">
    <div class="text-center">
      <!-- <img class="img-fluid" :src="item.logo" width="100" alt="Card image cap"> -->
      <iframe class="img-fluid" :src="item.video"></iframe>
      <div class="card-body">
        <h5 class="card-title">{{ item.name | capitalize }} </h5>
      </div>
      <div>
    <span v-for="(group, index) in item.stack" :key="index" :class="`badge badge-${tags[group]}`">{{ group }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    // list of tags to giving each stack a different color
      tags: {
        2010: 'light',
        2011: 'dark',
        2012: 'success',
        2013: 'danger',
        2014: 'warning',
        2015: 'secondary',
        2016: 'info',
        2017: 'danger',
        2018: 'light',
        2019: 'success',
        2020: 'warning',
        2021: 'info'
      }
    }
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.toUpperCase()
    }
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
