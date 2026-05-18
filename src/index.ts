/**
 * @amlplugins/stability-three-d
 *
 * Thin namespaced re-export of the native stability-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Stability AI 3D — Stable Fast 3D image-to-3D mesh generation (.glb).
 */

import * as _sdk from "stability-ai";
export * from "stability-ai";
export { _sdk as sdk };
export default _sdk;
