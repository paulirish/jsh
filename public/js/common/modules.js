var allDescriptors = [
{
    "name" : "main",
    "extensions": [
        {
            "type": "@WebInspector.ContextMenu.Provider",
            "contextTypes": ["WebInspector.UISourceCode", "WebInspector.Resource", "WebInspector.NetworkRequest", "Node"],
            "className": "WebInspector.HandlerRegistry.ContextMenuProvider"
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.reload",
            "className": "WebInspector.Main.ReloadActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "F5 Ctrl+R"
                },
                {
                    "platform": "mac",
                    "shortcut": "Meta+R"
                }
            ]
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.hard-reload",
            "className": "WebInspector.Main.HardReloadActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "Shift+F5 Ctrl+F5 Ctrl+Shift+F5 Shift+Ctrl+R"
                },
                {
                    "platform": "mac",
                    "shortcut": "Shift+Meta+R"
                }
            ]
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.toggle-drawer",
            "className": "WebInspector.InspectorView.DrawerToggleActionDelegate",
            "bindings": [
                {
                    "shortcut": "Esc"
                }
            ]
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.debug-reload",
            "className": "WebInspector.Main.DebugReloadActionDelegate",
            "bindings": [
                {
                    "shortcut": "Alt+R"
                }
            ]
        },
        /*
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.toggle-element-search",
            "className": "WebInspector.InspectElementModeController.ToggleSearchActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "Ctrl+Shift+C"
                },
                {
                    "platform": "mac",
                    "shortcut": "Meta+Shift+C"
                }
            ]
        },
        */
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.zoom-in",
            "className": "WebInspector.Main.ZoomInActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "Ctrl+Plus Ctrl+Shift+Plus Ctrl+NumpadPlus Ctrl+Shift+NumpadPlus"
                },
                {
                    "platform": "mac",
                    "shortcut": "Meta+Plus Meta+Shift+Plus Meta+NumpadPlus Meta+Shift+NumpadPlus"
                }
            ]
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.zoom-out",
            "className": "WebInspector.Main.ZoomOutActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "Ctrl+Minus Ctrl+Shift+Minus Ctrl+NumpadMinus Ctrl+Shift+NumpadMinus"
                },
                {
                    "platform": "mac",
                    "shortcut": "Meta+Minus Meta+Shift+Minus Meta+NumpadMinus Meta+Shift+NumpadMinus"
                }
            ]
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "main.zoom-reset",
            "className": "WebInspector.Main.ZoomResetActionDelegate",
            "bindings": [
                {
                    "platform": "windows,linux",
                    "shortcut": "Ctrl+0 Ctrl+Numpad0"
                },
                {
                    "platform": "mac",
                    "shortcut": "Meta+0 Meta+Numpad0"
                }
            ]
        },
        /*
        {
            "type": "drawer-view",
            "name": "emulation",
            "title": "Emulation",
            "order": "10",
            "className": "WebInspector.OverridesView"
        },
        {
            "type": "drawer-view",
            "name": "rendering",
            "title": "Rendering",
            "order": "11",
            "className": "WebInspector.RenderingOptions.View"
        },
        */
        {
            "type": "@WebInspector.Revealer",
            "contextTypes": ["WebInspector.OverridesSupport"],
            "className": "WebInspector.OverridesView.Revealer"
        },
        /*
        {
            "type": "@WebInspector.StatusBarButton.Provider",
            "className": "WebInspector.InspectElementModeController.ToggleButtonProvider",
            "location": "toolbar-left",
            "order": 0,
            "actionId": "main.toggle-element-search"
        },

        {
            "type": "@WebInspector.StatusBarButton.Provider",
            "className": "WebInspector.App.EmulationButtonProvider",
            "order": 1,
            "location": "toolbar-left"
        },
        {
            "type": "@WebInspector.StatusBarButton.Provider",
            "className": "WebInspector.DockController.ButtonProvider",
            "order": 1,
            "location": "toolbar-right"
        },
        */
        /*
        {
            "type": "@WebInspector.StatusBarButton.Provider",
            "className": "WebInspector.ScreencastApp.StatusBarButtonProvider",
            "order": 2,
            "location": "toolbar-right"
        },
        {
            "type": "ui-setting",
            "title": "Disable cache (while DevTools is open)",
            "settingName": "cacheDisabled",
            "settingType": "checkbox"
        },
        {
            "type": "ui-setting",
            "section": "Appearance",
            "title": "Split panels vertically when docked to right",
            "settingName": "splitVerticallyWhenDockedToRight",
            "settingType": "checkbox"
        },
        {
            "type": "ui-setting",
            "section": "Appearance",
            "settingType": "custom",
            "className": "WebInspector.Main.ShortcutPanelSwitchSettingDelegate"
        },
        {
            "type": "ui-setting",
            "section": "Appearance",
            "title": "Don't show emulation warnings",
            "settingName": "disableOverridesWarning",
            "settingType": "checkbox"
        },
        {
            "type": "ui-setting",
            "section": "Extensions",
            "settingType": "custom",
            "className": "WebInspector.HandlerRegistry.OpenAnchorLocationSettingDelegate"
        }
        */
    ]
},
{
    "name" : "console",
    "extensions": [
        {
            "type": "@WebInspector.Panel",
            "name": "console",
            "title": "Console",
            "order": 20,
            "className": "WebInspector.ConsolePanel"
        },
        {
            "type": "drawer-view",
            "name": "console",
            "title": "Console",
            "order": "0",
            "className": "WebInspector.ConsolePanel.WrapperView"
        },
        {
            "type": "@WebInspector.Revealer",
            "contextTypes": ["WebInspector.Console"],
            "className": "WebInspector.ConsolePanel.ConsoleRevealer"
        },
        {
            "type": "@WebInspector.ActionDelegate",
            "actionId": "console.show",
            "className": "WebInspector.ConsoleView.ShowConsoleActionDelegate",
            "bindings": [
                {
                    "shortcut": "Ctrl+`"
                }
            ]
        },
        {
            "type": "ui-setting",
            "section": "Console",
            "title": "Log XMLHttpRequests",
            "settingName": "monitoringXHREnabled",
            "settingType": "checkbox"
        },
        {
            "type": "ui-setting",
            "section": "Console",
            "title": "Preserve log upon navigation",
            "settingName": "preserveConsoleLog",
            "settingType": "checkbox"
        },
        {
            "type": "ui-setting",
            "section": "Console",
            "title": "Show timestamps",
            "settingName": "consoleTimestampsEnabled",
            "settingType": "checkbox"
        }
    ],
    //"scripts": [ "ConsolePanel.js" ]
}

];
