export type Theme = "light" | "dark"

export interface ThemeContextProps  {
	theme : Theme;
 setTheme: (t: Theme) => void;
}


export interface Colorscheme  {
	name: string;
	theme: Theme;

	colors: {
		// id  : color 
		[key:string]:string;
	}

}


// Colorscheme
//
// {
//	Id: string,
//  value : color *default color initial value*,
//  }
//
//
//

// -- sections
				// DEFUALT 
        // UI
        // LSP
        // DIFF
        // DIAGNOSTIC 
				// Treesitter
