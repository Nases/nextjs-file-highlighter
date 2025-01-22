import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Create and register the FileDecorationProvider
  const provider = new PageFileDecorationProvider();
  context.subscriptions.push(vscode.window.registerFileDecorationProvider(provider));
}

class PageFileDecorationProvider implements vscode.FileDecorationProvider {
  // Event emitter to signal updates (not used in this simple example)
  private _onDidChangeFileDecorations = new vscode.EventEmitter<vscode.Uri | vscode.Uri[] | undefined>();
  onDidChangeFileDecorations = this._onDidChangeFileDecorations.event;

  provideFileDecoration(uri: vscode.Uri): vscode.ProviderResult<vscode.FileDecoration> {
    // Check if the file name ends with "page.js"
    if (uri.path.endsWith('page.js')) {
      return {
        badge: 'P',                           // A badge character to display
        tooltip: 'This is a page.js file',    // Tooltip on hover
        color: new vscode.ThemeColor('charts.blue') // Badge color from the theme palette
      };
    }
    return;
  }
}

export function deactivate() {}