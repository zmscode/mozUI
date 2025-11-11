/**
 * mozUI - Minimal Headless UI Library
 *
 * A flexible component library with headless primitives and optional styled components.
 */

// ============================================================================
// Primitives (Default Export Path)
// ============================================================================
// Import headless components directly from the root
export * from "./primitives";

// ============================================================================
// Styled Components (Opt-in)
// ============================================================================
// Import pre-styled components via namespace
export * as Styled from "./styled";

// ============================================================================
// Recipes (For Custom Styling)
// ============================================================================
// Import style recipes for custom implementations
export * as Recipes from "./recipes";

// ============================================================================
// Hooks
// ============================================================================
// Import shared hooks for building custom components
export * from "./hooks";

// ============================================================================
// Utilities
// ============================================================================
export { cn } from "./utils/tailwind";
export type * from "./utils/types";
