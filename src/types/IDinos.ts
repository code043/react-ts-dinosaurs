export interface DinoInfos {
  id: number;
  nome: string;
  image: string;
  periodo: string;
  dieta: string;
  tamanho: string;
  peso: string;
  habitat: string;
  caracteristicas: string;
  comportamento: string;
  descobertas_recentes: string;
  importancia_cultura_popular: string;
}
export interface Info {
  info: DinoInfos;
}
export interface PropsIcon {
  showInfo: boolean;
}
