define([
  "ko",
  ...getKitItemTemplate("kit-tom-select"),
  "ko-tom-select",
], function (ko, template, css) {
  function Model(params) {
    let obj = params.data;
    if (obj.itemVM) return obj.itemVM;
    let self = obj;
    self.values = ko.observableArray();
    self.values.subscribe((val) => {
      if (val) {
        self.value(val.join(","));
      } else {
        self.value(null);
      }
    });
    self._getOptions = obj._getOptions;
    self.getItems = ko.pureComputed(() => obj._getOptions());
    if (!self.tomselect) {
      self.tomselect = {
        optionsValue: "value",
        optionsTextEn: "text_en",
        optionsTextAr: "text",
        maxItems: null,
        valueField: "value",
        labelField: "text",
        searchField: ["text", "text_en"],
        options: self.getItems,
        create: false,
        data: self.values,
        item: self,
        plugins: {
          remove_button: {
            title: "Remove this item",
          },
        },
        render: {
          option: function (data, escape) {
              return `<div> <span class="${escape(
                data["icon"]
              )}"></span>${escape(
                data["text"]
              )}</div>`;
          
          },
          item: function (data, escape) {
            return `<div> <span class="${escape(
                data["icon"]
              )}"></span>${escape(
                data["text"]
              )}</div>`;
          },
          option_create: function (data, escape) {
            return (
              '<div class="create">Add <strong>' +
              escape(data.input) +
              "</strong>&hellip;</div>"
            );
          },
          no_results: function (data, escape) {
            return (
              '<div class="no-results uk-flex">' +
              `<span class="display-ar" >لا يوجد نتائج لـ</span><span class="display-en" >No results found for</span>` +
              '<span>"' +
              escape(data.input) +
              '"</span></div>'
            );
          },
          not_loading: function (data, escape) {
            // no default content
          },
          optgroup: function (data) {
            let optgroup = document.createElement("div");
            optgroup.className = "optgroup";
            optgroup.appendChild(data.options);
            return optgroup;
          },
          optgroup_header: function (data, escape) {
            return (
              '<div class="optgroup-header">' + escape(data.label) + "</div>"
            );
          },
          loading: function (data, escape) {
            return '<div class="spinner"></div>';
          },
          dropdown: function () {
            return "<div></div>";
          },
        },
      };
    }

    params.data.itemVM = self;
    return self;
  }

  return { viewModel: Model, template: template };
});
