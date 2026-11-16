$ErrorActionPreference='Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
$out=Join-Path (Get-Location) 'test-output/windows'
New-Item -ItemType Directory -Force $out | Out-Null
$zip=Join-Path $out 'game.zip'
$exe=Join-Path $out 'KnowledgePlanet.exe'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$stream=[IO.File]::Open($zip,[IO.FileMode]::Create)
$archive=[IO.Compression.ZipArchive]::new($stream,[IO.Compression.ZipArchiveMode]::Create)
try {
 $paths=@('index.html','styles.css','feeding.css','experience.css','node_modules/phaser/dist/phaser.min.js')
 $paths+=Get-ChildItem src -Filter '*.mjs' | ForEach-Object {'src/'+$_.Name}
 $paths+=Get-ChildItem assets -Filter '*-v1.png' | ForEach-Object {'assets/'+$_.Name}
 foreach($path in $paths){[IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive,(Join-Path (Get-Location) $path),$path) | Out-Null}
}finally{$archive.Dispose();$stream.Dispose()}
$csc=Join-Path $env:WINDIR 'Microsoft.NET/Framework64/v4.0.30319/csc.exe'
& $csc /nologo /target:winexe /reference:System.IO.Compression.dll "/resource:$zip,game.zip" "/out:$exe" (Join-Path (Get-Location) 'desktop/Launcher.cs')
if($LASTEXITCODE){throw 'Windows executable build failed'}
Get-FileHash $exe


