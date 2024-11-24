/// <reference types="vite/client" />

// dataLayer models
export {};
declare global {
  interface DataLayerEvent {
    event: string;
    [key: string]: string; // Definição para propriedades dinâmicas
  }
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
