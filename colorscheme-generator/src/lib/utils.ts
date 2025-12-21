import type { CSV } from "@/lib/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
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
				palette: ["#191724", "#eb6f92", "#ebbcba", "#f6c177", "#31748f", "#c4a7e7"],
			},
			{
				name: "Moon",
				palette: ["#232136", "#6e6a86", "#eb6f92", "#f6c177", "#2a283e", "#c4a7e7"],
			},
			{
				name: "Dawn",
				palette: ["#faf4ed", "#9893a5", "#b4637a", "#ea9d34", "#286983", "#907aa9"],
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
    echo $((2 * 3 * (3 + 4)))
}

# Computes the number 42 using a subshell command
function compute42Subshell() {
    echo "$(echo "2*3*(3+4)" | bc)"
}

# Subtract the second parameter from the first and outputs the result
# It can only handle integers
function subtract() {
    local a=\${1:?"First param not set"}
    local b=\${2:?"Second param not set"}

    echo -n "$((a - b))"
}

echo 'The current working directory is: '" \${PWD}"

echo "100 - 58 = $(subtract 100 58)"

fortyTwo=\$(compute42)
echo "$fortyTwo is 42"

fortyTwo=\$(compute42Subshell)
echo "\${fortyTwo} is 42"

echo "6 * 7 is $fortyTwo"  > log.txt 2>&1

echo \`echo This is an echo\`

empty=""
[ -z "$empty" ]  && This variable is empty!

cat -  << EOF
    Dear Mr. X,
    this is a message to you.

    With kind regards,
    Mr. Y
EOF
`


export const c = `
/*
 * BLOCK COMMENT
 */

#include <stdio.h>
#include <stdlib.h>

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
    return 3.14159 * circle.radius * circle.radius;
}

int main() {
    // Union to store either a rectangle or a circle
    union ShapeUnion myShape;

    // User input to choose shape
    int choice;
    printf("Enter 1 for Rectangle or 2 for Circle: ");
    scanf("%d", &choice);

    // Dynamically allocate memory based on user choice
    if (choice == 1) {
        // User chose rectangle
        myShape.rectangle.length = 5.0;
        myShape.rectangle.width = 3.0;
    } else if (choice == 2) {
        // User chose circle
        myShape.circle.radius = 4.0;
    } else {
        // Invalid choice
        printf("Invalid choice.\n");
        return 1;
    }

    // Calculate and display area based on user's choice
    if (choice == 1) {
        printf("Area of the rectangle: %.2f\n", calculateRectangleArea(myShape.rectangle));
    } else if (choice == 2) {
        printf("Area of the circle: %.2f\n", calculateCircleArea(myShape.circle));
    }

    // Dynamic memory allocation example
    int* dynamicArray = (int*)malloc(5 * sizeof(int));
    if (dynamicArray == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    // Populate and display dynamic array
    printf("Dynamic Array: ");
    for (int i = 0; i < 5; i++) {
        dynamicArray[i] = i + 1;
        printf("%d ", dynamicArray[i]);
    }
    printf("\n");

    // Free dynamically allocated memory
    free(dynamicArray);

    return 0;
}
`

export const javascript =`
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
    var urls = ['www.cnn.com', 5, globalVar]
    this.request = new XMLHttpRequest()
    url = url.replace(/^\s*(.*)/, '$1') // skip leading whitespace
    /* check the url to be in urls */
    var a = '\u1111z\n\u11ac'
    this.foo = new (function () {})()
    let a = true && false
    foo()
    // #
    const cons = 'abc'
    let a = true
    console.log(cons)
}
let myObj = {
    first: 'first',
    second: 3,
    o: {
        hello: 'world',
    },
}

typeof 'nice'
new Class()
class NameClass {}
foo({ abc: 'abcde' })
foo.bar({ foo: 'abc' })
let foo="bar";
const bar="foo";
var foo="bar";
obj.abc = function () {}

;async () => {
    await Promise.resolve()
}
`


export const rust =`
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

extern "C" {
    static mut ERROR_MESSAGE: *mut std::os::raw::c_char;
}

struct Table<const N: usize>([[i32; N]; N]);

pub trait Write {
    fn write(&mut self, buf: &[u8]) -> Result<usize>;
}

struct Object<T> {
    flag: Flag,
    fields: HashMap<T, u64>,
}

union MyUnion {
    f1: u32,
    f2: f32,
}

type RcObject<T> = Rc<Object<T>>;

impl<T> Write for Object<T> {
    fn write(&mut self, buf: &[u8]) -> Result<usize> {
        let s = stuff::write_map(&self.fields, buf)?;
        info!("{} byte(s) written", s);
        Ok(s)
    }
}

impl<T> Default for Object<T> {
    fn default() -> Self {
        Object {
            flag: Flag::Good,
            fields: HashMap::new(),
        }
    }
}

macro_rules! make_wrapper {
    (\$wrapper_ty:ident, \$base_ty:ty \$(, \$lu_ty:ty)?) => {
        pub struct \$wrapper_ty(\$base_ty);
        impl From<\$base_ty> for \$wrapper_ty {
            fn from(base: \$base_ty) -> Self {
                Self(base)
            }
        }
        \$(
            impl From<\$lu_ty> for \$wrapper_ty {
                fn from(lu: \$lu_ty) -> Self {
                    Self(lu.get())
                }
            }
            impl From<\$wrapper_ty> for \$lu_ty {
                fn from(st: \$wrapper_ty) -> Self {
                    Self::new(st.0)
                }
            }
        )?
    }
}

/* Block comment */
fn main() {
    // A simple integer calculator:
    // \`+\` or \`-\` means add or subtract by 1
    // \`*\` or \`/\` means multiply or divide by 2
    stuff::AppVersion::print();

    let input = Option::None;
    let program = input.unwrap_or_else(|| "+ + * - /");
    let mut accumulator = 0;

    for token in program.chars() {
        match token {
            '+' => accumulator += 1,
            '-' => accumulator -= 1,
            '*' => accumulator *= 2,
            '/' => accumulator /= 2,
            _ => { /* ignore everything else */ }
        }
    }

    info!(
        "The program \"{}\" calculates the value {}",
        program, accumulator
    );
}

// example syntax for derive
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct MyStruct {
    pub field1: u32,
    pub field2: u32,
}

/// Some documentation \`with a code\`, *an italic text*
/// and **a bold text**
/// # Heading
/// [Rust](https://www.rust-lang.org/)
#[cfg(target_os = "linux")]
unsafe fn a_function<T: 'lifetime>(count: &mut i64) -> ! {
    count += 1;
    'label: loop {
        let str_with_escapes = "Hello\x20W\u{f3}rld!\u{abcd}";
        println!("{} {foo:<4}", str_with_escapes, foo = 42);
    }
}

fn test() {
    unsafe {
        a_function(1);
    }
}

#[cfg(feature = "disabled_feature")]
fn cfg_disabled_function() {}#[macro_use]
`

export const java = `
/* Block comment */

import java.util.Date;

import static AnInterface.CONSTANT;
import static java.util.Date.parse;
import static SomeClass.staticField;

/**
 * Doc comment here for <code>SomeClass</code>
 *
 * @param T type parameter
 * @see Math#sin(double)
 */
@Annotation(name = value)
public class SomeClass<T extends Runnable> { // some comment
  private T field = null;
  private double unusedField = 12345.67890;
  private UnknownType anotherString = "Another\nStrin\g";
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
    int localVar = "IntelliJ"; // Error, incompatible types
    System.out.println(anotherString + toString() + localVar);
    int sum = protectedField + packagePrivateField + staticField;
    long time = parse("1.2.3"); // Method is deprecated
    new Thread().countStackFrames(); // Method is deprecated and marked for removal
    reassignedValue++;
    field.run();
    new SomeClass() {
      {
        int a = localVar;
      }
    };
    int[] l = new ArrayList<String>().toArray(new int[CONSTANT]);
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
`


export const typescript = `
module ModuleValidator {
    import checkChars = CharUtils.notWhiteSpace

    export interface HasValidator<T> {
        validateValue(): Boolean
    }

    type FooBarAlias = string

    @decorator()
    class HasValidator implements HasValidator<String> {
        /* Processed values */
        static validatedValue: Array<String> = ['', 'aa']
        private myValue: String

        /**
         * Constructor for class
         * @param valueParameter Value for <i>validation</i>
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

    function globalFunction<TypeParameter>(value: TypeParameter) {
        //global function
        return 42
    }

    declare var declareUrl
    var varUrl = declareUrl.replace(/^\s*(.*)/, '\$1').concat('\u1111z\n\u0022')
    var html = \`<div title='HTML injection'>Injected language fragment</div>\`
    var hello = () => console.log('hello')
    HasValidator.createInstance(varUrl).validateValue()

    function acceptsUnion(s: string | number) {
        if (typeof s === 'string') {
            s
        }
    }

    enum EnumName {
        EnumMember,
    }
}
`

export const cpp =`
/*
 * Block comment
 */
#include <cstdio>
#include <vector>

using namespace std;  // line comment
namespace foo {

  typedef struct Struct {
    int field;
  } Typedef;
  enum Enum {Foo = 1, Bar = 2};

  Typedef *globalVar;
  extern Typedef *externVar;

  template<typename T, int N>
  class Class {
    T n;
  public:
    void function(int param1, int param2, int param3) {
      int localVar1, localVar2, localVar3;
      int *localVar = new int[1];
      std::vector<int> vec = { 1, 2, 3 };
      this->n = N;
      localVar1 = param1 + param2 + localVar3;

    label:
      printf("Formatted string %d\n\g", localVar[0]);
      printf(R"**(Formatted raw-string %d\n)**", 1);
      std::cout << (1 << 2) << std::endl;

    /**
     * Macro documentation comment
     * @param A description
     */
    #define FOO(A) A
    #ifdef DEBUG
      printf("debug");
    #endif
    }
  };

  template <typename T>
  concept Concept = requires (T t) {
    t.field;
  };

  template<typename T>
  struct Widget {
      Widget(T t);
  };

  template<typename T>
  Widget(T) -> Widget<typename T::value_type>;
}
`
