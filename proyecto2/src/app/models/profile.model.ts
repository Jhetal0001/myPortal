export interface ProfileStudie {
  id: string,
  titulo_obtenido: string,
  nombre_institucion: string,
  departamento?: string,
  municipio?: string,
  fecha_inicio: Date,
  fecha_fin: Date
}

export interface ProfileCertificate {
  id: string,
  nombre_curso: string,
  nombre_escuela : string,
  fecha_fin: Date,
  categoria: string,
  url_certificado: string
}

export interface ProfileExperience {
  id: string,
  nombre_empresa: string,
  cargo: string,
  departamento?: string,
  municipio?: string,
  fecha_inicio : Date,
  fecha_fin: Date,
  funciones_responsabilidades: string
}

export interface ProfileAbilities {
  id: string,
  nombre_habilidad: string,
  porcentaje: string
}
