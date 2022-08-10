<template>
  <div class="container-fluid">
    <div class="search-wrapper">
    <!-- the search bar form -->
      <form v-on:submit="getfilteredData">
        <div class="form-row">
          <div class="col-10">
            <input type="text" class="form-control" placeholder="Enter key word  ..." v-model="search" v-on:keyup="getfilteredData">
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </form>
      <!-- check boxes -->
      <div id="checkboxes">
      <div v-for="(stack,index) in stacks" :key="index" class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox"  v-model="stack.checked" v-on:change="getfilteredData">
        <label class="form-check-label">
        {{ stack.value }}
        </label>
      </div>
    </div>
  </div>
  <!-- end of checkboxes -->
  <div class="card-columns">
    <!-- iterate data -->
    <item-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-card>
   </div>
  </div>
</template>
<script>
import ItemCard from './ItemCard';
import data from '../data/data';
export default {
  name: 'SearchPage',
  components: {
    'item-card': ItemCard
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.stacks.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data() {
    return {
      filteredData: [],
      search: '',
      stacks: [
      {
        checked: false,
        value: 2010
      },
      {
        checked: false,
        value: 2011
      },
      {
        checked: false,
        value: 2012
        },
      {
        checked: false,
        value: 2013
      },
      {
        checked: false,
        value: 2014
      },
      {
        checked: false,
        value: 2015
      },
      {
        checked: false,
        value: 2016
      },
      {
        checked: false,
        value: 2017
      },
      {
        checked: false,
        value: 2018
      },
      {
        checked: false,
        value: 2019
      },
      {
        checked: false,
        value: 2020
      },
      {
        checked: false,
        value: 2021
      }
      ]
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = data;
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters= this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
        this.filteredData = filteredDataByfilters;
      }
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== '') {
        filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>