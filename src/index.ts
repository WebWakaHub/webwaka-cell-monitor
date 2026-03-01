/**
 * Monitor — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { TelemetryCollectorOrchestrator } from "@webwaka/organelle-telemetry-collector";
import { InstrumentationProbeOrchestrator } from "@webwaka/organelle-instrumentation-probe";

export { TelemetryCollectorOrchestrator } from '@webwaka/organelle-telemetry-collector';
export { InstrumentationProbeOrchestrator } from '@webwaka/organelle-instrumentation-probe';

/**
 * Monitor Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class MonitorComposition {
  private telemetryCollectorOrchestrator: TelemetryCollectorOrchestrator;
  private instrumentationProbeOrchestrator: InstrumentationProbeOrchestrator;

  constructor() {
    this.telemetryCollectorOrchestrator = new TelemetryCollectorOrchestrator();
    this.instrumentationProbeOrchestrator = new InstrumentationProbeOrchestrator();
  }
}

export * from "./types";
