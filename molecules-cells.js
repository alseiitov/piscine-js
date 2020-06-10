function RNA(DNA) {
    let RNA = '';

    for (let i = 0; i < DNA.length; i++) {
        switch (DNA[i]) {
            case 'G':
                RNA += 'C';
                continue
            case 'C':
                RNA += 'G';
                continue
            case 'T':
                RNA += 'A';
                continue
            case 'A':
                RNA += 'U';
                continue
            default:
                RNA += DNA[i];
                continue
        }
    }

    return RNA
}

function DNA(RNA) {
    let DNA = '';

    for (let i = 0; i < RNA.length; i++) {
        switch (RNA[i]) {
            case 'C':
                DNA += 'G';
                continue
            case 'G':
                DNA += 'C';
                continue
            case 'A':
                DNA += 'T';
                continue
            case 'U':
                DNA += 'A';
                continue
            default:
                DNA += RNA[i];
                continue
        }
    }

    return DNA
}
