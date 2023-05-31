/* istanbul ignore file */
export const mockstate = {
  user: {
    roles: ["formsflow-client", "formsflow-reviewer", "formsflow-designer"],
    userDetail: {
      email_verified: false,
      role: ["formsflow-client", "formsflow-reviewer", "formsflow-designer"],
      selectLanguages: [],
      name: "John Honai",
      preferred_username: "sample name",
      given_name: "name 1",
      family_name: "name2",
    },
    isAuthenticated: true,
    currentPage: "",
    showApplications: true,
    showViewSubmissions: true,
  },

  formDelete: {
    formSubMissionDelete: {
      modalOpen: false,
      submissionId: "",
      formId: "",
    },
    formDelete: {
      modalOpen: false,
      formId: "",
      formName: "",
    },
    formSubmissionError: {
      modalOpen: false,
      message: "",
    },
    isFormSubmissionLoading: false,
    isFormWorkflowSaved: false,
  },
  bpmForms: {
    error: "",
    formsFullList: [],
    forms: [],
    isActive: false,
    limit: 10,
    pagination: {
      numPages: 0,
      page: 1,
      total: 0,
    },
    query: {},
    select: "",
    sort: "",
    totalForms: "",
    maintainPagination: false,
  },
  form: {
    id: "",
    isActive: false,
    lastUpdated: 0,
    form: {},
    url: "",
    error: "",
  },
  forms: {
    error: "",
    forms: [
      {
        _id: "61b0a83c131fc9043088b328",
        type: "form",
        tags: ["common"],
        owner: "random@domain",
        components: [
          {
            label: "Text Field",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: {
              type: "input",
            },
            inputMask: "",
            allowMultipleMasks: false,
            customClass: "",
            tabindex: "",
            autocomplete: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            mask: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "plain",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: {
              required: false,
              pattern: "",
              customMessage: "",
              custom: "",
              customPrivate: false,
              json: "",
              minLength: "",
              maxLength: "",
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            unique: false,
            errorLabel: "",
            key: "textField",
            tags: [],
            properties: {},
            conditional: {
              show: null,
              when: null,
              eq: "",
              json: "",
            },
            customConditional: "",
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "textfield",
            input: true,
            refreshOn: "",
            dataGridLabel: false,
            inputType: "text",
            id: "eipyrbk",
            defaultValue: null,
          },
          {
            label: "Text Area",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: {
              type: "input",
            },
            editor: "",
            autoExpand: false,
            customClass: "",
            tabindex: "",
            autocomplete: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "html",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: {
              required: false,
              pattern: "",
              customMessage: "",
              custom: "",
              customPrivate: false,
              json: "",
              minLength: "",
              maxLength: "",
              minWords: "",
              maxWords: "",
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            unique: false,
            errorLabel: "",
            key: "textArea",
            tags: [],
            properties: {},
            conditional: {
              show: null,
              when: null,
              eq: "",
              json: "",
            },
            customConditional: "",
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "textarea",
            rows: 3,
            wysiwyg: false,
            input: true,
            refreshOn: "",
            dataGridLabel: false,
            allowMultipleMasks: false,
            mask: false,
            inputType: "text",
            inputMask: "",
            fixedSize: true,
            id: "eub5rfd",
            defaultValue: null,
          },
          {
            type: "button",
            label: "Submit",
            key: "submit",
            size: "md",
            block: false,
            action: "submit",
            disableOnInvalid: true,
            theme: "primary",
            input: true,
            placeholder: "",
            prefix: "",
            customClass: "",
            suffix: "",
            multiple: false,
            defaultValue: null,
            protected: false,
            unique: false,
            persistent: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            redrawOn: "",
            tableView: false,
            modalEdit: false,
            dataGridLabel: true,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            dbIndex: false,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            widget: {
              type: "input",
            },
            attributes: {},
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            overlay: {
              style: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            allowCalculateOverride: false,
            encrypted: false,
            showCharCount: false,
            showWordCount: false,
            properties: {},
            allowMultipleMasks: false,
            leftIcon: "",
            rightIcon: "",
            id: "ea2orc8",
          },
          {
            label: "applicationId",
            customClass: "",
            modalEdit: false,
            persistent: true,
            protected: false,
            dbIndex: false,
            encrypted: false,
            redrawOn: "",
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            key: "applicationId",
            tags: [],
            properties: {},
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "hidden",
            input: true,
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            unique: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            tableView: false,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            widget: {
              type: "input",
            },
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            allowCalculateOverride: false,
            showCharCount: false,
            showWordCount: false,
            allowMultipleMasks: false,
            inputType: "hidden",
            id: "em1y8gd",
            defaultValue: "",
            dataGridLabel: false,
          },
          {
            label: "applicationStatus",
            customClass: "",
            modalEdit: false,
            defaultValue: null,
            persistent: true,
            protected: false,
            dbIndex: false,
            encrypted: false,
            redrawOn: "",
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            key: "applicationStatus",
            tags: [],
            properties: {},
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "hidden",
            input: true,
            tableView: false,
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            unique: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            dataGridLabel: false,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            widget: {
              type: "input",
            },
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            allowCalculateOverride: false,
            showCharCount: false,
            showWordCount: false,
            allowMultipleMasks: false,
            inputType: "hidden",
            id: "e6z1qd9",
          },
        ],
        display: "form",
        title: "test",
        name: "test",
        path: "test",
        access: [
          {
            roles: ["6180c595900602c582bc7e44", "6180c5969006021132bc7e45"],
            type: "read_all",
          },
        ],
        created: "2021-12-08T12:42:36.858Z",
        modified: "2021-12-08T12:43:24.732Z",
        machineName: "test2",
      },
      {
        _id: "61b0452634966c095b9c6772",
        type: "form",
        tags: ["common"],
        owner: "john.honai@aot-technologies.com",
        components: [
          {
            label: "First Name",
            labelPosition: "top",
            placeholder: "",
            description: "",
            tooltip: "",
            prefix: "",
            suffix: "",
            widget: {
              type: "input",
            },
            inputMask: "",
            allowMultipleMasks: false,
            customClass: "",
            tabindex: "",
            autocomplete: "",
            hidden: false,
            hideLabel: false,
            showWordCount: false,
            showCharCount: false,
            mask: false,
            autofocus: false,
            spellcheck: true,
            disabled: false,
            tableView: true,
            modalEdit: false,
            multiple: false,
            persistent: true,
            inputFormat: "plain",
            protected: false,
            dbIndex: false,
            case: "",
            encrypted: false,
            redrawOn: "",
            clearOnHide: true,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            allowCalculateOverride: false,
            validateOn: "change",
            validate: {
              required: false,
              pattern: "",
              customMessage: "",
              custom: "",
              customPrivate: false,
              json: "",
              minLength: "",
              maxLength: "",
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            unique: false,
            errorLabel: "",
            key: "firstName",
            tags: [],
            properties: {},
            conditional: {
              show: null,
              when: null,
              eq: "",
              json: "",
            },
            customConditional: "",
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "textfield",
            input: true,
            refreshOn: "",
            dataGridLabel: false,
            inputType: "text",
            id: "el366qn",
            defaultValue: "",
          },
          {
            type: "button",
            label: "Submit",
            key: "submit",
            size: "md",
            block: false,
            action: "submit",
            disableOnInvalid: true,
            theme: "primary",
            input: true,
            placeholder: "",
            prefix: "",
            customClass: "",
            suffix: "",
            multiple: false,
            defaultValue: null,
            protected: false,
            unique: false,
            persistent: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            redrawOn: "",
            tableView: false,
            modalEdit: false,
            dataGridLabel: true,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            dbIndex: false,
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            widget: {
              type: "input",
            },
            attributes: {},
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            overlay: {
              style: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            allowCalculateOverride: false,
            encrypted: false,
            showCharCount: false,
            showWordCount: false,
            properties: {},
            allowMultipleMasks: false,
            leftIcon: "",
            rightIcon: "",
            id: "eveveyg",
          },
          {
            label: "applicationId",
            customClass: "",
            modalEdit: false,
            persistent: true,
            protected: false,
            dbIndex: false,
            encrypted: false,
            redrawOn: "",
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            key: "applicationId",
            tags: [],
            properties: {},
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "hidden",
            input: true,
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            unique: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            tableView: false,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            widget: {
              type: "input",
            },
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            allowCalculateOverride: false,
            showCharCount: false,
            showWordCount: false,
            allowMultipleMasks: false,
            inputType: "hidden",
            id: "em1y8gd",
            defaultValue: "",
          },
          {
            label: "applicationStatus",
            customClass: "",
            modalEdit: false,
            defaultValue: null,
            persistent: true,
            protected: false,
            dbIndex: false,
            encrypted: false,
            redrawOn: "",
            customDefaultValue: "",
            calculateValue: "",
            calculateServer: false,
            key: "applicationStatus",
            tags: [],
            properties: {},
            logic: [],
            attributes: {},
            overlay: {
              style: "",
              page: "",
              left: "",
              top: "",
              width: "",
              height: "",
            },
            type: "hidden",
            input: true,
            tableView: false,
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            unique: false,
            hidden: false,
            clearOnHide: true,
            refreshOn: "",
            dataGridLabel: false,
            labelPosition: "top",
            description: "",
            errorLabel: "",
            tooltip: "",
            hideLabel: false,
            tabindex: "",
            disabled: false,
            autofocus: false,
            widget: {
              type: "input",
            },
            validateOn: "change",
            validate: {
              required: false,
              custom: "",
              customPrivate: false,
              strictDateValidation: false,
              multiple: false,
              unique: false,
            },
            conditional: {
              show: null,
              when: null,
              eq: "",
            },
            allowCalculateOverride: false,
            showCharCount: false,
            showWordCount: false,
            allowMultipleMasks: false,
            inputType: "hidden",
            id: "e6z1qd9",
          },
        ],
        display: "form",
        title: "Test Form 007",
        name: "testForm007",
        path: "testform007",
        created: "2021-12-08T05:39:50.509Z",
        modified: "2021-12-08T05:39:50.521Z",
        machineName: "testForm007",
      },
    ],
    isActive: false,
    limit: 10,
    pagination: {
      numPages: 4,
      page: 1,
      total: 36,
    },
    query: {
      type: "form",
      tags: "common",
    },
    select: "",
    sort: "-created",
  },
  submission: {
    formId: "",
    id: "",
    isActive: false,
    lastUpdated: 0,
    submission: {},
    url: "",
    error: "",
  },
  submissions: {
    error: "",
    formId: "",
    isActive: false,
    limit: 10,
    pagination: {
      numPages: 0,
      page: 1,
      total: 0,
    },
    query: {},
    select: "",
    sort: "",
    submissions: [],
  },
  metrics: {
    isMetricsLoading: true,
    submissionsList: [],
    submissionsStatusList: [],
    isMetricsStatusLoading: true,
    selectedMetricsId: 0,
    metricsLoadError: false,
    metricsStatusLoadError: false,
  },
  process: {
    isProcessLoading: true,
    processStatusList: [],
    processLoadError: false,
    processList: [],
    formProcessError: false,
    formProcessList: [],
    processActivityList: null,
    processDiagramXML: "",
    processActivityLoadError: false,
    isProcessDiagramLoading: true,
  },
  menu: {
    isMenuOpen: false,
  },
  formCheckList: {
    formList: [],
    formUploadFormList: [],
    formUploadCounter: 0,
  },
};
