"use client";

import { createContext, useContext } from "react";

/**
 * Whether the page has been revealed (the loading screen has lifted).
 * On-load entrance animations (FadeUp, Float) wait for this so they play
 * where people can see them, not behind the loader.
 * Defaults to true, so components still animate on their own if no
 * loading screen is mounted.
 */
export const RevealedContext = createContext(true);

export const useRevealed = () => useContext(RevealedContext);
