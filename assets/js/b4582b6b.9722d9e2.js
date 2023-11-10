"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(87462),r=a(67294),s=a(86010),i=a(72957),o=a(16550),l=a(75238),d=a(33609),u=a(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=l??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var b=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},61134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(73992),i=a(18679);const o={title:"Dataset",slug:"/api/tutorials/datasets",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md"},l="Dataset",d={unversionedId:"docs/api/tutorials/datasets",id:"docs/api/tutorials/datasets",title:"Dataset",description:"Why Would You Use Datasets?",source:"@site/genDocs/docs/api/tutorials/datasets.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/datasets",permalink:"/docs/next/api/tutorials/datasets",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md",tags:[],version:"current",frontMatter:{title:"Dataset",slug:"/api/tutorials/datasets",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md"},sidebar:"overviewSidebar",previous:{title:"But First, Semantics: Upsert versus Patch",permalink:"/docs/next/advanced/patch"},next:{title:"Lineage",permalink:"/docs/next/api/tutorials/lineage"}},u={},c=[{value:"Why Would You Use Datasets?",id:"why-would-you-use-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Dataset",id:"create-dataset",level:2},{value:"Expected Outcomes of Creating Dataset",id:"expected-outcomes-of-creating-dataset",level:3},{value:"Delete Dataset",id:"delete-dataset",level:2},{value:"Expected Outcomes of Deleting Dataset",id:"expected-outcomes-of-deleting-dataset",level:3}],p={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dataset"},"Dataset"),(0,r.kt)("h2",{id:"why-would-you-use-datasets"},"Why Would You Use Datasets?"),(0,r.kt)("p",null,"The dataset entity is one the most important entities in the metadata model. They represent collections of data that are typically represented as Tables or Views in a database (e.g. BigQuery, Snowflake, Redshift etc.), Streams in a stream-processing environment (Kafka, Pulsar etc.), bundles of data found as Files or Folders in data lake systems (S3, ADLS, etc.).\nFor more information about datasets, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/generated/metamodel/entities/dataset"},"Dataset"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: create a dataset with three columns."),(0,r.kt)("li",{parentName:"ul"},"Delete: delete a dataset.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("h2",{id:"create-dataset"},"Create Dataset"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Creating a dataset via ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," is currently not supported.\nPlease check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information."))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.AuditStamp;\nimport com.linkedin.common.urn.CorpuserUrn;\nimport com.linkedin.common.urn.DataPlatformUrn;\nimport com.linkedin.common.urn.DatasetUrn;\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.schema.DateType;\nimport com.linkedin.schema.OtherSchema;\nimport com.linkedin.schema.SchemaField;\nimport com.linkedin.schema.SchemaFieldArray;\nimport com.linkedin.schema.SchemaFieldDataType;\nimport com.linkedin.schema.SchemaMetadata;\nimport com.linkedin.schema.StringType;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport datahub.event.MetadataChangeProposalWrapper;\n\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\n\npublic class DatasetAdd {\n    \n    private DatasetAdd() {\n        \n    }\n\n    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n        DatasetUrn datasetUrn = UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD");\n        CorpuserUrn userUrn = new CorpuserUrn("ingestion");\n        AuditStamp lastModified = new AuditStamp().setTime(1640692800000L).setActor(userUrn);\n\n        SchemaMetadata schemaMetadata = new SchemaMetadata()\n                .setSchemaName("customer")\n                .setPlatform(new DataPlatformUrn("hive"))\n                .setVersion(0L)\n                .setHash("")\n                .setPlatformSchema(SchemaMetadata.PlatformSchema.create(new OtherSchema().setRawSchema("__insert raw schema here__")))\n                .setLastModified(lastModified);\n\n        SchemaFieldArray fields = new SchemaFieldArray();\n\n        SchemaField field1 = new SchemaField()\n                .setFieldPath("address.zipcode")\n                .setType(new SchemaFieldDataType().setType(SchemaFieldDataType.Type.create(new StringType())))\n                .setNativeDataType("VARCHAR(50)")\n                .setDescription("This is the zipcode of the address. Specified using extended form and limited to addresses in the United States")\n                .setLastModified(lastModified);\n        fields.add(field1);\n\n        SchemaField field2 = new SchemaField().setFieldPath("address.street")\n                .setType(new SchemaFieldDataType().setType(SchemaFieldDataType.Type.create(new StringType())))\n                .setNativeDataType("VARCHAR(100)")\n                .setDescription("Street corresponding to the address")\n                .setLastModified(lastModified);\n        fields.add(field2);\n\n        SchemaField field3 = new SchemaField().setFieldPath("last_sold_date")\n                .setType(new SchemaFieldDataType().setType(SchemaFieldDataType.Type.create(new DateType())))\n                .setNativeDataType("Date")\n                .setDescription("Date of the last sale date for this property")\n                .setLastModified(lastModified);\n        fields.add(field3);\n\n        schemaMetadata.setFields(fields);\n\n        MetadataChangeProposalWrapper mcpw = MetadataChangeProposalWrapper.builder()\n                .entityType("dataset")\n                .entityUrn(datasetUrn)\n                .upsert()\n                .aspect(schemaMetadata)\n                .build();\n\n        String token = "";\n        RestEmitter emitter = RestEmitter.create(\n                b -> b.server("http://localhost:8080")\n                        .token(token)\n        );\n        Future<MetadataWriteResponse> response = emitter.emit(mcpw, null);\n        System.out.println(response.get().getResponseContent());\n    }\n\n}\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_schema.py\n# Imports for urn construction utility methods\nfrom datahub.emitter.mce_builder import make_data_platform_urn, make_dataset_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    DateTypeClass,\n    OtherSchemaClass,\n    SchemaFieldClass,\n    SchemaFieldDataTypeClass,\n    SchemaMetadataClass,\n    StringTypeClass,\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD"),\n    aspect=SchemaMetadataClass(\n        schemaName="customer",  # not used\n        platform=make_data_platform_urn("hive"),  # important <- platform must be an urn\n        version=0,  # when the source system has a notion of versioning of schemas, insert this in, otherwise leave as 0\n        hash="",  # when the source system has a notion of unique schemas identified via hash, include a hash, else leave it as empty string\n        platformSchema=OtherSchemaClass(rawSchema="__insert raw schema here__"),\n        lastModified=AuditStampClass(\n            time=1640692800000, actor="urn:li:corpuser:ingestion"\n        ),\n        fields=[\n            SchemaFieldClass(\n                fieldPath="address.zipcode",\n                type=SchemaFieldDataTypeClass(type=StringTypeClass()),\n                nativeDataType="VARCHAR(50)",  # use this to provide the type of the field in the source system\'s vernacular\n                description="This is the zipcode of the address. Specified using extended form and limited to addresses in the United States",\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n            SchemaFieldClass(\n                fieldPath="address.street",\n                type=SchemaFieldDataTypeClass(type=StringTypeClass()),\n                nativeDataType="VARCHAR(100)",\n                description="Street corresponding to the address",\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n            SchemaFieldClass(\n                fieldPath="last_sold_date",\n                type=SchemaFieldDataTypeClass(type=DateTypeClass()),\n                nativeDataType="Date",\n                description="Date of the last sale date for this property",\n                created=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n        ],\n    ),\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-creating-dataset"},"Expected Outcomes of Creating Dataset"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"realestate_db.sales")," dataset has been created."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-created.png"})),(0,r.kt)("h2",{id:"delete-dataset"},"Delete Dataset"),(0,r.kt)("p",null,"You may want to delete a dataset if it is no longer needed, contains incorrect or sensitive information, or if it was created for testing purposes and is no longer necessary in production.\nIt is possible to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/how/delete-metadata"},"delete entities via CLI"),", but a programmatic approach is necessary for scalability."),(0,r.kt)("p",null,"There are two methods of deletion: soft delete and hard delete.\n",(0,r.kt)("strong",{parentName:"p"},"Soft delete")," sets the Status aspect of the entity to Removed, which hides the entity and all its aspects from being returned by the UI.\n",(0,r.kt)("strong",{parentName:"p"},"Hard delete")," physically deletes all rows for all aspects of the entity."),(0,r.kt)("p",null,"For more information about soft delete and hard delete, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/how/delete-metadata#delete-by-urn"},"Removing Metadata from DataHub"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Hard delete with ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," is currently not supported.\nPlease check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchUpdateSoftDeleted {\n    batchUpdateSoftDeleted(input:\n      { urns: ["urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"],\n        deleted: true })\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "batchUpdateSoftDeleted": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation batchUpdateSoftDeleted { batchUpdateSoftDeleted(input: { deleted: true, urns: [\\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\\"] }) }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "batchUpdateSoftDeleted": true }, "extensions": {} }\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/delete_dataset.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ngraph = DataHubGraph(\n    config=DatahubClientConfig(\n        server="http://localhost:8080",\n    )\n)\n\ndataset_urn = make_dataset_urn(name="fct_users_created", platform="hive")\n\n# Soft-delete the dataset.\ngraph.delete_entity(urn=dataset_urn, hard=False)\n\nlog.info(f"Deleted dataset {dataset_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-deleting-dataset"},"Expected Outcomes of Deleting Dataset"),(0,r.kt)("p",null,"The dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," has now been deleted, so if you search for a hive dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_delete"),", you will no longer be able to see it."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-deleted.png"})))}h.isMDXComponent=!0}}]);