<template>
  <div id="app">
    <div class="e-float-input" style="width: 200px; display: inline-block;">
      <input type="text" class="searchtext" />
      <span class="e-float-line"></span>
      <label class="e-float-text">Search text</label>
    </div>
    <ejs-button id="search" @click.native="search">Search</ejs-button>
    <ejs-grid ref="grid" :dataSource="data" height="262px">
      <e-columns>
        <e-column
          field="OrderID"
          headerText="Order ID"
          width="100"
          textAlign="Center"
        ></e-column>
        <e-column
          field="CustomerID"
          headerText="Customer ID"
          width="120"
          textAlign="Center"
        ></e-column>
        <e-column
          field="Freight"
          headerText="Freight"
          width="100"
          textAlign="Center"
        ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: [
        {
          OrderID: 10248,
          CustomerID: "VINET",
          Freight: 32.38,
        },
        {
          OrderID: 10249,
          CustomerID: "TOMSP",
          Freight: 11.61,
        },
        {
          OrderID: 10250,
          CustomerID: "HANAR",
          Freight: 65.83,
        },
        {
          OrderID: 10251,
          CustomerID: "VICTE",
          Freight: 41.34,
        },
        {
          OrderID: 10252,
          CustomerID: "SUPRD",
          Freight: 51.3,
        },
        {
          OrderID: 10253,
          CustomerID: "HANAR",
          Freight: 58.17,
        },
        {
          OrderID: 10254,
          CustomerID: "CHOPS",
          Freight: 22.98,
        },
        {
          OrderID: 10255,
          CustomerID: "RICSU",
          Freight: 148.33,
        },
        {
          OrderID: 10256,
          CustomerID: "WELLI",
          Freight: 13.97,
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
    grid: [Search],
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
