<template>
  <div id="app" v-if="users.length > 0">
    <div class="header">
      <div class="search-wrapper">
        <div class="e-float-input" style="width: 200px; display: inline-block;">
          <input type="text" class="searchtext" />
          <span class="e-float-line"></span>
          <label class="e-float-text">Search text</label>
        </div>
        <ejs-button
          class="e-success e-outline"
          id="search"
          @click.native="search"
          >Search</ejs-button
        >
      </div>
      <div class="hide-columns-wrapper">
        <ejs-button class="e-info e-outline" @click.native="show"
          >open Column Chooser
        </ejs-button>
      </div>
      <div class="records-input-wrapper">
        <div class="e-float-input" style="width: 200px; display: inline-block;">
          <input type="number" class="searchtext" v-model="recordsNumber" />
          <span class="e-float-line"></span>
          <label class="e-float-text">Enter Records Number</label>
        </div>
      </div>
      <button @click="editColumn">edit</button>
    </div>

    <ejs-grid
      ref="grid"
      id='Grid'
      :dataSource="usersData"
      :allowFiltering="true"
      :allowPaging="true"
      :pageSettings="{ pageSize: recordsNumber }"
      :allowSorting="true"
      :showColumnChooser="true"
      :editSettings="editSettings"
      :allowPdfExport="true"
      :toolbarClick="toolbarClick"
      :toolbar="toolbarOptions"
      :allowExcelExport='true'
      height="600px"
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
import { mapActions, mapState } from "vuex";
import {
  GridPlugin,
  Filter,
  Search,
  Page,
  Sort,
  ColumnChooser,
  Edit,
  Toolbar, 
  PdfExport,
  ExcelExport
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      recordsNumber: 10,
      editSettings: { allowEditing: true },
      toolbarOptions: ['PdfExport','ExcelExport']
    };
  },
  methods: {
    ...mapActions(["fetchUsers", "editUser"]),
    search: function() {
      let searchText = document.getElementsByClassName("searchtext")[0].value;
      this.$refs.grid.search(searchText);
    },
    randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
        .toISOString()
        .slice(0, 10);
    },
    show: function() {
      this.$refs.grid.ej2Instances.columnChooserModule.openColumnChooser(
        200,
        50
      ); // give X and Y axis
    },
    editColumn() {
      this.editUser();
    },
      toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            let pdfExportProperties = {
                exportType: 'CurrentPage'
            };
            this.$refs.grid.pdfExport(pdfExportProperties);
        } else {
                      let excelExportProperties = {
                exportType: 'CurrentPage'
            };
            this.$refs.grid.excelExport(excelExportProperties);
        }
    }

    
  },
  computed: {
    ...mapState(["users"]),
    usersData() {
      let users;
      users =
        this.users &&
        this.users.map((user) => {
          return {
            ID: user.id,
            Name: user.name,
            Birth: this.randomDate(new Date(1990, 0, 1), new Date()),
            Salary: user.address.zipcode,
            Email: user.email,
            Mobile: user.phone,
          };
        });
      return users;
    },
  },
  mounted() {
    this.fetchUsers();
  },
  provide: {
    grid: [Search, Filter, Page, Sort, ColumnChooser, Edit, Toolbar, PdfExport, ExcelExport],
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1%;
}
</style>
