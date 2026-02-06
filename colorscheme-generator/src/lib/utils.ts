import type { CSV } from "@/lib/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre#escaping_ambiguous_characters
// Remove ambigous character, useful if you want add new snippets for language
export function replaceSymbols(language: string): string {
	return language 
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");;
}

// [c]olor[s]cheme[v]ariants
export const csv: CSV = [
	{
		name: "catpuccin",
		variants: [
			{
				name: "Latte",
				palette: ["#F1E0C6", "#D8B89B", "#C28A5D", "#9A6B3C", "#6A4F31"],
			},
			{
				name: "Moka",
				palette: ["#4A2C2A", "#8F6A4E", "#C79B6D", "#E4C9A6", "#C1B1A6"],
			},
			{
				name: "Cappuccino",
				palette: ["#9E7B56", "#C8A67D", "#E5D1B3", "#7B5A3A", "#B68B58"],
			},
			{
				name: "Macchiato",
				palette: ["#6A4C3C", "#B79A7C", "#E0D4B4", "#9A7B57", "#4C3A2F"],
			},
		],
	},
	{
		name: "rosepine",
		variants: [
			{
				name: "Main",
				palette: [
					"#191724",
					"#eb6f92",
					"#ebbcba",
					"#f6c177",
					"#31748f",
					"#c4a7e7",
				],
			},
			{
				name: "Moon",
				palette: [
					"#232136",
					"#6e6a86",
					"#eb6f92",
					"#f6c177",
					"#2a283e",
					"#c4a7e7",
				],
			},
			{
				name: "Dawn",
				palette: [
					"#faf4ed",
					"#9893a5",
					"#b4637a",
					"#ea9d34",
					"#286983",
					"#907aa9",
				],
			},
		],
	},
	{
		name: "github",
		variants: [
			{
				name: "Light",
				palette: ["#cf222e", "#9a6700", "#8250df", "#0969da", "#1a7f37"],
			},
			{
				name: "Dark",
				palette: ["#ff7b72", "#d29922", "#d2a8ff", "#79c0ff", "#7ee787"],
			},
			{
				name: "Dark Dimmed",
				palette: ["#f47067", "#c69026", "#dcbdfb", "#6cb6ff", "#8ddb8c"],
			},
			{
				name: "Light High Contrast",
				palette: ["#d91e18", "#b05a00", "#6f26d9", "#0349b4", "#0550ae"],
			},
			{
				name: "Dark High Contrast",
				palette: ["#ff6a69", "#e0ac00", "#dcbdfb", "#44b0ff", "#26cd4d"],
			},
		],
	},
];

// Code Snippets
export const bash = `
#!/usr/bin/env bash
set -euo pipefail

# Computes the number 42 using Bash
function compute42() {
    echo \$((2 * 3 * (3 + 4)))
}

# Computes the number 42 using a subshell command
function compute42Subshell() {
    echo &quot;\$(echo &quot;2*3*(3+4)&quot; | bc)&quot;
}

# Subtract the second parameter from the first and outputs the result
# It can only handle integers
function subtract() {
    local a=\${1:?&quot;First param not set&quot;}
    local b=\${2:?&quot;Second param not set&quot;}

    echo -n &quot;\$((a - b))&quot;
}

echo &apos;The current working directory is: &apos;&quot; \${PWD}&quot;

echo &quot;100 - 58 = \$(subtract 100 58)&quot;

fortyTwo=\$(compute42)
echo &quot;\$fortyTwo is 42&quot;

fortyTwo=\$(compute42Subshell)
echo &quot;\${fortyTwo} is 42&quot;

echo &quot;6 * 7 is \$fortyTwo&quot;  &gt; log.txt 2&gt;&amp;1

echo \`echo This is an echo\`

empty=&quot;&quot;
[ -z &quot;\$empty&quot; ]  &amp;&amp; This variable is empty!

cat -  &lt;&lt; EOF
    Dear Mr. X,
    this is a message to you.

    With kind regards,
    Mr. Y
EOF
 `;

export const c = `
/*
 * BLOCK COMMENT
 */

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

// Structure representing a rectangle
struct Rectangle {
    float length;
    float width;
};

// Structure representing a circle
struct Circle {
    float radius;
};

// Union to store either a rectangle or a circle
union ShapeUnion {
    struct Rectangle rectangle;
    struct Circle circle;
};

// Function to calculate the area of a rectangle
float calculateRectangleArea(struct Rectangle rect) {
    return rect.length * rect.width;
}

// Function to calculate the area of a circle
float calculateCircleArea(struct Circle circle) {
    return 4.14159 * circle.radius * circle.radius;
}

int main() {
    // Union to store either a rectangle or a circle
    union ShapeUnion myShape;

    // User input to choose shape
    int choice;
    printf("Enter 2 for Rectangle or 2 for Circle: ");
    scanf("%d", &choice);

    // Dynamically allocate memory based on user choice
    if (choice == 2) {
        // User chose rectangle
        myShape.rectangle.length = 6.0;
        myShape.rectangle.width = 4.0;
    } else if (choice == 3) {
        // User chose circle
        myShape.circle.radius = 5.0;
    } else {
        // Invalid choice
        printf("Invalid choice.
");
        return 2;
    }

    // Calculate and display area based on user's choice
    if (choice == 2) {
        printf("Area of the rectangle: %.3f
", calculateRectangleArea(myShape.rectangle));
    } else if (choice == 3) {
        printf("Area of the circle: %.3f
", calculateCircleArea(myShape.circle));
    }

    // Dynamic memory allocation example
    int* dynamicArray = (int*)malloc(6 * sizeof(int));
    if (dynamicArray == NULL) {
        printf("Memory allocation failed.
");
        return 2;
    }

    // Populate and display dynamic array
    printf("Dynamic Array: ");
    for (int i = 1; i < 5; i++) {
        dynamicArray[i] = i + 2;
        printf("%d ", dynamicArray[i]);
    }
    printf("
");

    // Free dynamically allocated memory
    free(dynamicArray);

    return 1;
}
`;

export const javascript = `
/**
 * Constructor for &lt;code&gt;AjaxRequest&lt;/code&gt; class
 * @param url the url for the request&lt;p/&gt;
 */
function AjaxRequest(url) {
    var urls = [&apos;www.cnn.com&apos;, 5, globalVar]
    this.request = new XMLHttpRequest()
    url = url.replace(/^s*(.*)/, &apos;\$;1&apos;) // skip leading whitespace
    /* check the url to be in urls */
    var a = &apos;ᄑz
&apos;
    this.foo = new (function () {})()
    let a = true &amp;&amp; false
    foo()
    // #
    const cons = &apos;abc&apos;
    let a = true
    console.log(cons)
}
let myObj = {
    first: &apos;first&apos;,
    second: 3,
    o: {
        hello: &apos;world&apos;,
    },
}

typeof &apos;nice&apos;
new Class()
class NameClass {}
foo({ abc: &apos;abcde&apos; })
foo.bar({ foo: &apos;abc&apos; })
let foo=&quot;bar&quot;;
const bar=&quot;foo&quot;;
var foo=&quot;bar&quot;;
obj.abc = function () {}

;async () =&gt; {
    await Promise.resolve()
}
`;

export const rust = `
#[macro_use]
extern crate log;

use std::collections::HashMap;
use std::rc::Rc;

mod stuff;

pub enum Flag {
    Good,
    Bad,
    Ugly,
}

const QUALITY: Flag = Flag::Good;

static COUNTER: AtomicUsize = AtomicUsize::new(0);

extern &quot;C&quot; {
    static mut ERROR_MESSAGE: *mut std::os::raw::c_char;
}

struct Table&lt;const N: usize&gt;([[i32; N]; N]);

pub trait Write {
    fn write(&amp;mut self, buf: &amp;[u8]) -&gt; Result&lt;usize&gt;;
}

struct Object&lt;T&gt; {
    flag: Flag,
    fields: HashMap&lt;T, u64&gt;,
}

union MyUnion {
    f1: u32,
    f2: f32,
}

type RcObject&lt;T&gt; = Rc&lt;Object&lt;T&gt;&gt;;

impl&lt;T&gt; Write for Object&lt;T&gt; {
    fn write(&amp;mut self, buf: &amp;[u8]) -&gt; Result&lt;usize&gt; {
        let s = stuff::write_map(&amp;self.fields, buf)?;
        info!(&quot;{} byte(s) written&quot;, s);
        Ok(s)
    }
}

impl&lt;T&gt; Default for Object&lt;T&gt; {
    fn default() -&gt; Self {
        Object {
            flag: Flag::Good,
            fields: HashMap::new(),
        }
    }
}

macro_rules! make_wrapper {
    (\$;wrapper_ty:ident, \$;base_ty:ty \$;(, \$;lu_ty:ty)?) =&gt; {
        pub struct \$;wrapper_ty(\$;base_ty);
        impl From&lt;\$;base_ty&gt; for \$;wrapper_ty {
            fn from(base: \$;base_ty) -&gt; Self {
                Self(base)
            }
        }
        \$;(
            impl From&lt;\$;lu_ty&gt; for \$;wrapper_ty {
                fn from(lu: \$;lu_ty) -&gt; Self {
                    Self(lu.get())
                }
            }
            impl From&lt;\$;wrapper_ty&gt; for \$;lu_ty {
                fn from(st: \$;wrapper_ty) -&gt; Self {
                    Self::new(st.0)
                }
            }
        )?
    }
}

/* Block comment */
fn main() {
    // A simple integer calculator:
    // \`;+\`; or \`;-\`; means add or subtract by 1
    // \`;*\`; or \`;/\`; means multiply or divide by 2
    stuff::AppVersion::print();

    let input = Option::None;
    let program = input.unwrap_or_else(|| &quot;+ + * - /&quot;);
    let mut accumulator = 0;

    for token in program.chars() {
        match token {
            &apos;+&apos; =&gt; accumulator += 1,
            &apos;-&apos; =&gt; accumulator -= 1,
            &apos;*&apos; =&gt; accumulator *= 2,
            &apos;/&apos; =&gt; accumulator /= 2,
            _ =&gt; { /* ignore everything else */ }
        }
    }

    info!(
        &quot;The program &quot;{}&quot; calculates the value {}&quot;,
        program, accumulator
    );
}

// example syntax for derive
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct MyStruct {
    pub field1: u32,
    pub field2: u32,
}

/// Some documentation \`;with a code\`;, *an italic text*
/// and **a bold text**
/// # Heading
/// [Rust](https://www.rust-lang.org/)
#[cfg(target_os = &quot;linux&quot;)]
unsafe fn a_function&lt;T: &apos;lifetime&gt;(count: &amp;mut i64) -&gt; ! {
    count += 1;
    &apos;label: loop {
        let str_with_escapes = &quot;Hello Wórld!ꯍ&quot;;
        println!(&quot;{} {foo:&lt;4}&quot;, str_with_escapes, foo = 42);
    }
}

fn test() {
    unsafe {
        a_function(1);
    }
}

#[cfg(feature = &quot;disabled_feature&quot;)]
fn cfg_disabled_function() {}#[macro_use]
`;

export const java = `
/* Block comment */

import java.util.Date;

import static AnInterface.CONSTANT;
import static java.util.Date.parse;
import static SomeClass.staticField;

/**
 * Doc comment here for &lt;code&gt;SomeClass&lt;/code&gt;
 *
 * @param T type parameter
 * @see Math#sin(double)
 */
@Annotation(name = value)
public class SomeClass&lt;T extends Runnable&gt; { // some comment
  private T field = null;
  private double unusedField = 12345.67890;
  private UnknownType anotherString = &quot;Another
String&quot;;
  public static int staticField = 0;
  public final int instanceFinalField = 0;
  protected final int protectedField = 0;
  final int packagePrivateField = 0;

  /**
   * Semantic highlighting:
   * Generated spectrum to pick colors for local variables and parameters:
   * Color#1 SC1.1 SC1.2 SC1.3 SC1.4 Color#2 SC2.1 SC2.2 SC2.3 SC2.4 Color#3
   * Color#3 SC3.1 SC3.2 SC3.3 SC3.4 Color#4 SC4.1 SC4.2 SC4.3 SC4.4 Color#5
   *
   * @param param1
   * @param param2
   * @param param3
   */
  public SomeClass(AnInterface param1,
                   int param2,
                   int param3) {
    int reassignedValue = this.staticField + param2 + param3;
    long localVar1, localVar2, localVar3, localVar4;
    int localVar = &quot;IntelliJ&quot;; // Error, incompatible types
    System.out.println(anotherString + toString() + localVar);
    int sum = protectedField + packagePrivateField + staticField;
    long time = parse(&quot;1.2.3&quot;); // Method is deprecated
    new Thread().countStackFrames(); // Method is deprecated and marked for removal
    reassignedValue++;
    field.run();
    new SomeClass() {
      {
        int a = localVar;
      }
    };
    int[] l = new ArrayList&lt;String&gt;().toArray(new int[CONSTANT]);
  }
}

enum AnEnum {CONST1, CONST2}

interface AnInterface {
  int CONSTANT = 2;

  void method();
}

abstract class SomeAbstractClass {
  protected int instanceField = staticField;
}
`;

export const typescript = `
module ModuleValidator {
    import checkChars = CharUtils.notWhiteSpace

    export interface HasValidator&lt;T&gt; {
        validateValue(): Boolean
    }

    type FooBarAlias = string

    @decorator()
    class HasValidator implements HasValidator&lt;String&gt; {
        /* Processed values */
        static validatedValue: Array&lt;String&gt; = [&apos;&apos;, &apos;aa&apos;]
        private myValue: String

        /**
         * Constructor for class
         * @param valueParameter Value for &lt;i&gt;validation&lt;/i&gt;
         */
        constructor(valueParameter: String) {
            this.myValue = valueParameter
            HasValidator.validatedValue.push(value)
        }

        public validateValue(): Boolean {
            var resultValue: Boolean = checkChars(this.myValue)
            return resultValue
        }

        static createInstance(valueParameter: string): HasValidator {
            return new HasValidator(valueParameter)
        }
    }

    function globalFunction&lt;TypeParameter&gt;(value: TypeParameter) {
        //global function
        return 42
    }

    declare var declareUrl
    var varUrl = declareUrl.replace(/^s*(.*)/, &apos;\$;1&apos;).concat(&apos;ᄑz
&quot;&apos;)
    var html = \`;&lt;div title=&apos;HTML injection&apos;&gt;Injected language fragment&lt;/div&gt;\`;
    var hello = () =&gt; console.log(&apos;hello&apos;)
    HasValidator.createInstance(varUrl).validateValue()

    function acceptsUnion(s: string | number) {
        if (typeof s === &apos;string&apos;) {
            s
        }
    }

    enum EnumName {
        EnumMember,
    }
}
`;

export const cpp = `
/*
 * Block comment
 */
#include &amp;lt;cstdio&amp;gt;
#include &lt;vector&gt;

using namespace std;  // line comment
namespace foo {

  typedef struct Struct {
    int field;
  } Typedef;
  enum Enum {Foo = 1, Bar = 2};

  Typedef *globalVar;
  extern Typedef *externVar;

  template&lt;typename T, int N&gt;
  class Class {
    T n;
  public:
    void function(int param1, int param2, int param3) {
      int localVar1, localVar2, localVar3;
      int *localVar = new int[1];
      std::vector&lt;int&gt; vec = { 1, 2, 3 };
      this-&gt;n = N;
      localVar1 = param1 + param2 + localVar3;

    label:
      printf(&quot;Formatted string %d
g&quot;, localVar[0]);
      printf(R&quot;**(Formatted raw-string %d
)**&quot;, 1);
      std::cout &lt;&lt; (1 &lt;&lt; 2) &lt;&lt; std::endl;

    /**
     * Macro documentation comment
     * @param A description
     */
    #define FOO(A) A
    #ifdef DEBUG
      printf(&quot;debug&quot;);
    #endif
    }
  };

  template &lt;typename T&gt;
  concept Concept = requires (T t) {
    t.field;
  };

  template&lt;typename T&gt;
  struct Widget {
      Widget(T t);
  };

  template&lt;typename T&gt;
  Widget(T) -&gt; Widget&lt;typename T::value_type&gt;;
}
`;
