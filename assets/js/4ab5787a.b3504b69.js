"use strict";(self.webpackChunkganfan_tech_website=self.webpackChunkganfan_tech_website||[]).push([[5069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={},i="PostgreSQL",s={unversionedId:"postgresql/index",id:"postgresql/index",title:"PostgreSQL",description:"PostgreSQL: The World's Most Advanced Open Source Relational Database",source:"@site/docs/postgresql/index.md",sourceDirName:"postgresql",slug:"/postgresql/",permalink:"/docs/postgresql/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/postgresql/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Virtual Box \u5b89\u88c5 Ubuntu Server 22.04",permalink:"/docs/tips-and-tricks/ubuntu-server"},next:{title:"\u5b89\u88c5 PostgreSQL",permalink:"/docs/postgresql/install"}},l={},u=[{value:"What is PostgreSQL?",id:"what-is-postgresql",level:2},{value:"Why use PostgreSQL?",id:"why-use-postgresql",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("p",null,"PostgreSQL: The World's Most Advanced Open Source Relational Database"),(0,n.kt)("h2",{id:"what-is-postgresql"},"What is PostgreSQL?"),(0,n.kt)("p",null,"PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 35 years of active development on the core platform."),(0,n.kt)("p",null,"PostgreSQL has earned a strong reputation for its proven architecture, reliability, data integrity, robust feature set, extensibility, and the dedication of the open source community behind the software to consistently deliver performant and innovative solutions. PostgreSQL runs on all major operating systems, has been ACID-compliant since 2001, and has powerful add-ons such as the popular PostGIS geospatial database extender. It is no surprise that PostgreSQL has become the open source relational database of choice for many people and organisations."),(0,n.kt)("p",null,"Getting started with using PostgreSQL has never been easier - pick a project you want to build, and let PostgreSQL safely and robustly store your data."),(0,n.kt)("h2",{id:"why-use-postgresql"},"Why use PostgreSQL?"),(0,n.kt)("p",null,"PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant environments, and help you manage your data no matter how big or small the dataset. In addition to being free and open source, PostgreSQL is highly extensible. For example, you can define your own data types, build out custom functions, even write code from different programming languages without recompiling your database!"),(0,n.kt)("p",null,"PostgreSQL tries to conform with the SQL standard where such conformance does not contradict traditional features or could lead to poor architectural decisions. Many of the features required by the SQL standard are supported, though sometimes with slightly differing syntax or function. Further moves towards conformance can be expected over time. As of the version 16 release in September 2023, PostgreSQL conforms to at least 170 of the 177 mandatory features for SQL:2023 Core conformance. As of this writing, no relational database meets full conformance with this standard."),(0,n.kt)("p",null,"Below is an inexhaustive list of various features found in PostgreSQL, with more being added in every major release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Types",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Primitives: Integer, Numeric, String, Boolean"),(0,n.kt)("li",{parentName:"ul"},"Structured: Date/Time, Array, Range / Multirange, UUID"),(0,n.kt)("li",{parentName:"ul"},"Document: JSON/JSONB, XML, Key-value (Hstore)"),(0,n.kt)("li",{parentName:"ul"},"Geometry: Point, Line, Circle, Polygon"),(0,n.kt)("li",{parentName:"ul"},"Customizations: Composite, Custom Types"))),(0,n.kt)("li",{parentName:"ul"},"Data Integrity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"UNIQUE, NOT NULL"),(0,n.kt)("li",{parentName:"ul"},"Primary Keys"),(0,n.kt)("li",{parentName:"ul"},"Foreign Keys"),(0,n.kt)("li",{parentName:"ul"},"Exclusion Constraints"),(0,n.kt)("li",{parentName:"ul"},"Explicit Locks, Advisory Locks"))),(0,n.kt)("li",{parentName:"ul"},"Concurrency, Performance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Indexing: B-tree, Multicolumn, Expressions, Partial"),(0,n.kt)("li",{parentName:"ul"},"Advanced Indexing: GiST, SP-Gist, KNN Gist, GIN, BRIN, Covering indexes, Bloom filters"),(0,n.kt)("li",{parentName:"ul"},"Sophisticated query planner / optimizer, index-only scans, multicolumn statistics"),(0,n.kt)("li",{parentName:"ul"},"Transactions, Nested Transactions (via savepoints)"),(0,n.kt)("li",{parentName:"ul"},"Multi-Version concurrency Control (MVCC)"),(0,n.kt)("li",{parentName:"ul"},"Parallelization of read queries and building B-tree indexes"),(0,n.kt)("li",{parentName:"ul"},"Table partitioning"),(0,n.kt)("li",{parentName:"ul"},"All transaction isolation levels defined in the SQL standard, including Serializable"),(0,n.kt)("li",{parentName:"ul"},"Just-in-time (JIT) compilation of expressions"))),(0,n.kt)("li",{parentName:"ul"},"Reliability, Disaster Recovery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Write-ahead Logging (WAL)"),(0,n.kt)("li",{parentName:"ul"},"Replication: Asynchronous, Synchronous, Logical"),(0,n.kt)("li",{parentName:"ul"},"Point-in-time-recovery (PITR), active standbys"),(0,n.kt)("li",{parentName:"ul"},"Tablespaces"))),(0,n.kt)("li",{parentName:"ul"},"Security",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Authentication: GSSAPI, SSPI, LDAP, SCRAM-SHA-256, Certificate, and more"),(0,n.kt)("li",{parentName:"ul"},"Robust access-control system"),(0,n.kt)("li",{parentName:"ul"},"Column and row-level security"),(0,n.kt)("li",{parentName:"ul"},"Multi-factor authentication with certificates and an additional method"))),(0,n.kt)("li",{parentName:"ul"},"Extensibility",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Stored functions and procedures"),(0,n.kt)("li",{parentName:"ul"},"Procedural Languages: PL/pgSQL, Perl, Python, and Tcl. There are other languages available through extensions, e.g. Java, JavaScript  (V8), R, Lua, and Rust"),(0,n.kt)("li",{parentName:"ul"},"SQL/JSON constructors, query functions, path expressions, and JSON_TABLE"),(0,n.kt)("li",{parentName:"ul"},"Foreign data wrappers: connect to other databases or streams with a standard SQL interface"),(0,n.kt)("li",{parentName:"ul"},"Customizable storage interface for tables"),(0,n.kt)("li",{parentName:"ul"},"Many extensions that provide additional functionality, including PostGIS"))),(0,n.kt)("li",{parentName:"ul"},"Internationalisation, Text Search",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Support for international character sets, e.g. through ICU collations"),(0,n.kt)("li",{parentName:"ul"},"Case-insensitive and accent-insensitive collations"),(0,n.kt)("li",{parentName:"ul"},"Full-text search")))),(0,n.kt)("p",null,"There are many more features that you can discover in the PostgreSQL documentation. Additionally, PostgreSQL is highly extensible: many features, such as indexes, have defined APIs so that you can build out with PostgreSQL to solve your challenges."),(0,n.kt)("p",null,"PostgreSQL has been proven to be highly scalable both in the sheer quantity of data it can manage and in the number of concurrent users it can accommodate. There are active PostgreSQL clusters in production environments that manage many terabytes of data, and specialized systems that manage petabytes."))}d.isMDXComponent=!0}}]);