export default interface Libro {
    id?: string;
    isbn: string;
    titulo: string;
    autores: string;
    categoria: string;
    subcategoria: string;
    editorial: string;
    edicion: string;
    numBook: number;
}

export default interface Prestamo {
    id?: string;
    isbn: string;
    matriculaEst: string;
    fechaPrest: Date;
    fechaDev: Date;
}

export default interface regEstadias {
    id?: string;
    numInvent: number;
    numEgres: number;
    nameAlum: string;
    nameProj: string;
    nameEmp: string;
    prograE: string;
    descripFisic: string;
    asesorAca: string;
    perEstadía: string;
    generacion: string;
    uni: string;
    observ: string;
}

export default interface Apartado {
    titulo: string;
    matricula: string;
}

