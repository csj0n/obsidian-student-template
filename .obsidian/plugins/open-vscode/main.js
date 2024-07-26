/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var f=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var P=(a,l)=>{for(var e in l)f(a,e,{get:l[e],enumerable:!0})},T=(a,l,e,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let s of V(l))!x.call(a,s)&&s!==e&&f(a,s,{get:()=>l[s],enumerable:!(i=S(l,s))||i.enumerable});return a};var k=a=>T(f({},"__esModule",{value:!0}),a);var E={};P(E,{default:()=>v});module.exports=k(E);var c=require("obsidian");var r=require("obsidian"),p={ribbonIcon:!0,ribbonCommandUsesCode:!0,executeTemplate:'code "{{vaultpath}}" "{{vaultpath}}/{{filepath}}"',openFile:!0,workspacePath:"{{vaultpath}}",useUrlInsiders:!1},m=class extends r.PluginSettingTab{constructor(e,i){super(e,i);this.plugin=i}display(){let{containerEl:e}=this;e.empty(),e.createEl("h3",{text:"General settings"}),new r.Setting(e).setName("Display Ribbon Icon").setDesc("Toggle this OFF if you want to hide the Ribbon Icon.").addToggle(n=>n.setValue(this.plugin.settings.ribbonIcon).onChange(t=>{this.plugin.settings.ribbonIcon=t,this.plugin.saveSettings(),this.plugin.refreshIconRibbon()})),new r.Setting(e).setName("Ribbon opens via `code` command").setDesc("Toggle this OFF if you'd prefer that the Ribbon Icon opens VSCode via URL.").addToggle(n=>n.setValue(this.plugin.settings.ribbonCommandUsesCode).onChange(t=>{this.plugin.settings.ribbonCommandUsesCode=t,this.plugin.saveSettings()})),e.createEl("h3",{text:"Open via `code` CLI settings"}),new r.Setting(e).setName("Template for executing the `code` command").setDesc('You can use the following variables: `{{vaultpath}}` (absolute), `{{filepath}}` (relative), `{{folderpath}}` (relative). Note that on MacOS, a full path to the VSCode executable is required (generally "/usr/local/bin/code"). Example: `/usr/local/bin/code "{{vaultpath}}" "{{vaultpath}}/{{filepath}}"`').addText(n=>n.setPlaceholder(p.executeTemplate).setValue(this.plugin.settings.executeTemplate||p.executeTemplate).onChange(t=>{t=t.trim(),t===""&&(t=p.executeTemplate),this.plugin.settings.executeTemplate=t,this.plugin.saveData(this.plugin.settings)})),e.createEl("h3",{text:"Open via `vscode://` URL settings"});let s=e.createEl("p").createEl("em",{text:`
				\u26A0\uFE0F This setting is not recommended for Windows users due to
				UX issues caused by security enhancements in VSCode on Windows.
				More information:
			`});s.appendChild(createEl("a",{text:"Open in VSCode Readme",href:"https://github.com/NomarCub/obsidian-open-vscode/blob/master/README.md#caveats-regarding-the-url-command-for-windows-users"})),s.appendText("."),new r.Setting(e).setName("Open current file").setDesc("Open the current file rather than the root of the vault.").addToggle(n=>n.setValue(this.plugin.settings.openFile||p.openFile).onChange(t=>{this.plugin.settings.openFile=t,this.plugin.saveData(this.plugin.settings)})),new r.Setting(e).setName("Path to VSCode Workspace").setDesc('Defaults to the {{vaultpath}} template variable. You can set this to an absolute path to a ".code-workspace" file if you prefer to use a Multi Root workspace file: ').setClass("setting-item--vscode-workspacePath").addText(n=>n.setPlaceholder(p.workspacePath).setValue(this.plugin.settings.workspacePath||p.workspacePath).onChange(t=>{t=t.trim(),t===""&&(t=p.workspacePath),this.plugin.settings.workspacePath=t,this.plugin.saveData(this.plugin.settings)}));let d=e.querySelector(".setting-item--vscode-workspacePath .setting-item-description");d.appendChild(createEl("a",{href:"https://code.visualstudio.com/docs/editor/workspaces#_multiroot-workspaces",text:"https://code.visualstudio.com/docs/editor/workspaces#_multiroot-workspaces"})),d.appendText("."),new r.Setting(e).setName("Open VSCode using a `vscode-insiders://` URL").addToggle(n=>{n.setValue(this.plugin.settings.useUrlInsiders).onChange(t=>{this.plugin.settings.useUrlInsiders=t,this.plugin.saveSettings()})})}};var I=`
<svg role="img" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <title>Visual Studio Code</title>
    <path
		fill="currentColor"
		d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
	/>
</svg>
`;(0,c.addIcon)("vscode-logo",I);var h=!1,v=class extends c.Plugin{constructor(){super(...arguments);this.refreshIconRibbon=()=>{var e;(e=this.ribbonIcon)==null||e.remove(),this.settings.ribbonIcon&&(this.ribbonIcon=this.addRibbonIcon("vscode-logo","VSCode",()=>{let i=this.settings.ribbonCommandUsesCode?"openVSCode":"openVSCodeUrl";this[i]()}))}}async onload(){var e;console.log("Loading "+this.manifest.name+" plugin"),this.addSettingTab(new m(this.app,this)),await this.loadSettings(),this.refreshIconRibbon(),this.addCommand({id:"open-vscode",name:"Open as Visual Studio Code workspace",callback:this.openVSCode.bind(this)}),this.addCommand({id:"open-vscode-via-url",name:"Open as Visual Studio Code workspace using a vscode:// URL",callback:this.openVSCodeUrl.bind(this)}),h=this.app.plugins.enabledPlugins.has("hot-reload")&&((e=this.app.plugins.plugins["hot-reload"])==null?void 0:e.enabledPlugins.has(this.manifest.id)),h&&(this.addCommand({id:"open-vscode-reload",name:"Reload the plugin in dev",callback:this.reload.bind(this)}),this.addCommand({id:"open-vscode-reset-settings",name:"Reset plugins settings to default in dev",callback:this.resetSettings.bind(this)}))}async openVSCode(){var g,u,C;if(!(this.app.vault.adapter instanceof c.FileSystemAdapter))return;let{executeTemplate:e}=this.settings,i=this.app.vault.adapter.getBasePath(),s=this.app.workspace.getActiveFile(),d=(g=s==null?void 0:s.path)!=null?g:"",n=(C=(u=s==null?void 0:s.parent)==null?void 0:u.path)!=null?C:"",{exec:t}=require("child_process"),o=e.trim()===""?p.executeTemplate:e;o=b(o,"{{vaultpath}}",i),o=b(o,"{{filepath}}",d),o=b(o,"{{folderpath}}",n),h&&console.log("[openVSCode]",{command:o}),t(o,(w,y,R)=>{w&&console.error(`[openVSCode] exec error: ${w}`)})}async openVSCodeUrl(){var g;if(!(this.app.vault.adapter instanceof c.FileSystemAdapter))return;let{openFile:e,useUrlInsiders:i}=this.settings,s=this.app.vault.adapter.getBasePath(),d=this.app.workspace.getActiveFile(),n=(g=d==null?void 0:d.path)!=null?g:"";h&&console.log("[open-vscode]",{settings:this.settings,path:s,filePath:n});let o=`${i?"vscode-insiders://":"vscode://"}file/${s}`;if(e){o+=`/${n}`;let u=b(this.settings.workspacePath,"{{vaultpath}}",s);window.open(`vscode://file/${u}`),setTimeout(()=>{h&&console.log("[openVSCode]",{url:o}),window.open(o)},200)}else h&&console.log("[openVSCode]",{url:o}),window.open(o)}async loadSettings(){this.settings=Object.assign({},p,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async reload(){let e=this.manifest.id,i=this.app.plugins;await i.disablePlugin(e),await i.enablePlugin(e),console.log("[open-vscode] reloaded",this)}async resetSettings(){console.log("[open-vscode]",{old:this.settings,DEFAULT_SETTINGS:p}),this.settings=p,await this.saveData(this.settings)}};function U(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function b(a,l,e){return a.replace(new RegExp(U(l),"g"),e)}