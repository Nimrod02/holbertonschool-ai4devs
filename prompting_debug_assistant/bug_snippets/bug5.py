import pandas as pd

def load_sales():
    df = pd.DataFrame({
        "month": ["01","02","03","04"],
        "revenue": ["100", "200", "x", "400"],  # "x" casse la conversion
        "region": ["EU","US","EU","APAC"]
    })
    # BUG: conversion silencieuse, erreurs ignorées
    df["revenue"] = pd.to_numeric(df["revenue"], errors="ignore")  # reste 'object'
    # BUG: chained assignment -> SettingWithCopy potentiel
    eu = df[df["region"] == "EU"]
    eu["revenue"] = eu["revenue"] * 1.2
    # BUG: iloc avec labels (mauvaise sémantique)
    df.iloc["03", 1] = 999
    # BUG: groupby + agg sur colonne inexistante
    out = df.groupby("region")["amount"].sum()
    return out

if __name__ == "__main__":
    print(load_sales())
