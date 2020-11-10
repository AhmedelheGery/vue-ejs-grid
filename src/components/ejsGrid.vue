<template>
  <div id="app">
    <div class="e-float-input" style="width: 200px; display: inline-block;">
      <input type="text" class="searchtext" />
      <span class="e-float-line"></span>
      <label class="e-float-text">Search text</label>
    </div>
    <ejs-button id="search" @click.native="search">Search</ejs-button>
    <ejs-grid
      ref="grid"
      :dataSource="data"
      :allowFiltering="true"
      height="262px"
    >
      <e-columns>
        <e-column
          field="ID"
          headerText="ID"
          width="100"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Name"
          headerText="Name"
          width="120"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Birth"
          headerText="Birth Date"
          width="100"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Salary"
          headerText="Salary"
          width="100"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Email"
          headerText="Email"
          width="100"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Mobile"
          headerText="Mobile"
          width="100"
          textAlign="Center"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Filter, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: [
        {
          ID: 10248,
          Name: "VINET",
          Birth: 32.38,
          Salary: 1000,
          Email: "test@test.co",
          Mobile: 123456,
        },
        {
          ID: 10249,
          Name: "TOMSP",
          Birth: 11.61,
          Salary: 1000,
          Email: "test@test.co",
          Mobile: 123456,
        },
        {
          ID: 10250,
          Name: "HANAR",
          Birth: 65.83,
          Salary: 1000,
          Email: "test@test.co",
          Mobile: 123456,
        },
      ],
    };
  },
  methods: {
    search: function() {
      let searchText = document.getElementsByClassName("searchtext")[0].value;
      this.$refs.grid.search(searchText);
    },
  },
  provide: {
    grid: [Search, Filter],
  },
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
