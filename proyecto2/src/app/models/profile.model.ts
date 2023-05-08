export interface ProfileData {
  departamento?: string,
  email: string,
  lastname: string,
  municipio: string,
  name: string,
  phone: string,
  profession: string,
  photo?: string
}

export interface ProfileProf {
  text_profile: string
}

export interface ProfileStudie {
  id: string,
  titulo_obtenido: string,
  nombre_institucion: string,
  departamento?: string,
  municipio?: string,
  fecha_inicio: Date,
  fecha_fin: Date | null,
  en_curso: boolean
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
  fecha_fin: Date | null,
  funciones_responsabilidades: string,
  en_curso: boolean
}

export interface ProfileAbilities {
  id: string,
  nombre_habilidad: string,
  porcentaje: string
}
